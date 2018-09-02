import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { GithubService } from "../../../shared/services/api/github.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from "../../services/data.service";
import { NotificationsService } from "angular2-notifications";
import { Profile } from "../../../shared/models/users";

@Component({
	selector: "app-edit-profile",
	templateUrl: "./edit-profile.component.html",
	styleUrls: ["./edit-profile.component.scss"]
})
export class EditProfileComponent implements OnInit {
	id: number;
	name: string;
	githubData: any[];
	profile: Profile;
	updatedForm: Profile;

	constructor(
		public activeModal: NgbActiveModal,
		public githubService: GithubService,
		private dataService: DataService,
		private notify: NotificationsService
	) {}

	profileForm = new FormGroup({
		id: new FormControl("", Validators.required),
		firstName: new FormControl("", Validators.required),
		lastName: new FormControl(""),
		avatar: new FormControl(""),
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
		github: new FormControl("")
	});

	ngOnInit() {
		this.dataService.getDetailed("profile", this.id).subscribe(
			(data: Profile) => {
				this.profile = data;
				this.profileForm.patchValue({
					id: this.id,
					firstName: data.firstName,
					lastName: data.lastName,
					avatar: data.avatar,
					location: data.location,
					website: data.website,
					company: data.company,
					title: data.title,
					bio: data.bio,
					twitter: data.twitter,
					facebook: data.facebook,
					linkedin: data.linkedin,
					youtube: data.youtube,
					github: data.github
				});
				console.log(data);
			},
			error => {
				console.log(error);
			},
			() => {
				this.onChanges();
			}
		);
		if (this.profile.github) {
			this.getRepo(this.profile.github);
		}
	}

	getRepo(username) {
		this.githubService.gitRepo(username).subscribe(info => {
			this.githubData = info;
			console.log(this.githubData);
		});
	}
	onChanges() {
		this.profileForm.valueChanges.subscribe(val => {
			this.updatedForm = val;
			console.log(this.updatedForm);
		});
	}
	update() {
		/* this.dataService.updateDetails("education", this.id, this.updatedForm).subscribe(results => {
			console.log(results);
		}, error => {
			console.log(error)
			this.notify.error("Seems there was an issue ?", error);
		},() => {
			this.notify.success("Education Updated")
			this.activeModal.close();
		})
	} */
	}
}
