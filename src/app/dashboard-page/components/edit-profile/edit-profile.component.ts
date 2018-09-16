import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { GithubService } from "../../../shared/services/api/github.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from "../../services/data.service";
import { NotificationsService } from "angular2-notifications";
import { Profile } from "../../../shared/models/users.model";
import { AuthService } from "../../../shared/services/auth/auth.service";

@Component({
	selector: "app-edit-profile",
	templateUrl: "./edit-profile.component.html",
	styleUrls: ["./edit-profile.component.scss"]
})
export class EditProfileComponent implements OnInit {

	private id: number;
	public name: string;
	private githubData: any[];
	public profile: Profile;
	private updatedForm: Profile;
	private firstVisit: boolean = JSON.parse(sessionStorage.getItem("firstVisit"));


	/**
	 * Creates an instance of edit profile component.
	 * @param activeModal The instance of our modal
	 * @param githubService Responsible for getting the github proflie data
	 * if the user provides the username
	 * @param dataService  Responsible for the CRUD operations with the database
	 * @param notify Responsible for notifying our user with toas message.
	 * @param auth refreshing the users token when a user opens the modal
	 */
	constructor(
		public activeModal: NgbActiveModal,
		public githubService: GithubService,
		private dataService: DataService,
		private notify: NotificationsService,
		private auth: AuthService
	) {}


	/**
	 * Profile form holding all the data the user can edit.
	 */
	profileForm = new FormGroup({
		id: new FormControl(this.id, Validators.required),
		firstName: new FormControl(""),
		lastName: new FormControl(""),
		location: new FormControl(""),
		website: new FormControl(""),
		company: new FormControl(""),
		title: new FormControl(""),
		bio: new FormControl(""),
		twitter: new FormControl(""),
		facebook: new FormControl(""),
		linkedin: new FormControl(""),
		instagram: new FormControl(""),
		youtube: new FormControl(""),
		github: new FormControl(""),
		avatar: new FormControl("", Validators.required),
		backgroundImage: new FormControl("", Validators.required)
	});


	/**
	 * on init
	 * We refresh the user token to make sure the user is authenticated
	 * We then grab all the data and fill out the form with information
	 * the user already has provided
	 * @fires onChanges()
	 */
	ngOnInit() {
		this.auth.refreshToken().subscribe(
			nothing => {
				this.dataService.getDetailed("profile", this.id).subscribe((data: Profile) => {
					this.profile = data;
					this.profileForm.patchValue({
						id: data.id,
						firstName: data.firstName,
						lastName: data.lastName,
						location: data.location,
						website: data.website,
						company: data.company,
						avatar: data.avatar,
						backgroundImage: data.backgroundImage,
						title: data.title,
						bio: data.bio,
						twitter: data.twitter,
						facebook: data.facebook,
						linkedin: data.linkedin,
						instagram: data.instagram,
						youtube: data.youtube,
						github: data.github
					});
				});
			},
			error => {
				console.log(error);
			},
			() => {
				this.onChanges();
			}
		);
	}


	/**
	 * Gets the repo data from github.
	 * This is only fired if the user has provided a username.
	 * @param username The username submitted in the form.
	 */
	getRepo(username: string) {
		this.githubService.gitRepo(username).subscribe(info => {
			this.githubData = info;
		});
	}


	/**
	 * Listing for changes that the user is doing to the form.
	 * This ensures we always have up to date data.
	 * As every keystroke updates the object
	 */
	onChanges() {
		this.profileForm.valueChanges.subscribe(val => {
			this.updatedForm = val;
		});
	}

	/**
	 *
	 * Sends a request to the backend with the user object
	 * Once subscribe is complete it will notify the user and close the modal
	 * As this gets fired on first visit we will set it to false the first time
	 * the user submits the form that way we know the user has given some data.
	 */
	update() {
		this.dataService.updateDetails("profile", this.id, this.updatedForm).subscribe(
			results => {},
			error => {
				console.log(error);
				this.notify.error(error);
			},
			() => {
				this.notify.success("Your Profile was Updated");
				this.activeModal.close();
				this.firstVisit = false;
				sessionStorage.setItem("firstVisit", "false");
				if (!this.firstVisit && this.profile.github !== "") {
					this.getRepo(this.profile.github);
				}
			}
		);
	}
}
