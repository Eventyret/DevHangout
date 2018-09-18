import { GithubService } from "./../shared/services/api/github.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbTooltipConfig } from "@ng-bootstrap/ng-bootstrap";
import { find as _find } from "lodash";
import { NgxSpinnerService } from "ngx-spinner";
import { FakeService } from "../shared/services/api/fake.service";
import { AuthService } from "../shared/services/auth/auth.service";
import { User, Profile } from "../shared/models/users.model";
import { environment } from "../../environments/environment";

@Component({
	selector: "app-profile",
	templateUrl: "./userprofile.component.html",
	styleUrls: ["./userprofile.component.scss"],
	providers: [NgbTooltipConfig]
})
export class ProfileComponent implements OnInit {
	public user: User;
	public support: boolean;
	public background: string;
	public normalBackground = "../../assets/landingBG.png";
	public githubData: any[];
	public profile: Profile;
	public production: boolean = environment.production;

	/**
	 * Creates an instance of profile component.
	 * @param spinner  Showing the pacman logo on load and gets hidden
	 * @param route  The Angular Routing, we are getting the ID of the user from this
	 * @param auth  Getting the users profile data
	 * @param fakeService  Getting the fake users data
	 * @param gitService Getting the Github Data from the user
	 */
	constructor(
		private spinner: NgxSpinnerService,
		private route: ActivatedRoute,
		private auth: AuthService,
		private fakeService: FakeService,
		private gitService: GithubService
	) {
		this.route.params.subscribe(params => {
			const id = params.id;
			this.getFakeData(id);
		});
	}


	/**
	 * on init we will be showing the spinner
	 */
	ngOnInit() {
		this.spinner.show();
	}


	/**
	 * Used for development to toggle the background
	 * for a user if we are running on localhost.
	 */
	public supporterTest() {
		this.support = !this.support;
	}


	/**
	 * If the user is equal or above 9000
	 * we know its a fake user and can get that data.
	 * Else we will  get the real users data from AuthService.
	 * @param id The userID to check
	 */
	private getFakeData(id: number) {
		if (id >= 9000) {
			this.fakeService.getFakeUsers().subscribe(
				data => {
					const userID = id;
					this.user = _find(data, function(o) {
						return o.id == userID;
					});
					this.profile = this.user.profile[0];
					this.support = this.profile.donator;
					this.githubData = this.user.repo;
				},
				error => {
					console.log(error);
					if (error.status === 401) {
						this.auth.refreshToken();
						this.spinner.hide();
					}
				},
				() => {
					this.spinner.hide();
				}
			);
		} else {
			this.auth.getUser(id).subscribe(data => {
				this.user = data;
				this.profile = data.profile[0];
				this.support = data.profile[0].donator;
				if (this.profile.github) {
					this.getRepos(this.user.profile[0].github);
				}
				this.spinner.hide();
			});
		}
	}


	/**
	 * Gets the repo of a user.
	 * This is not used for the fake users
	 * @param user The username
	 */
	private getRepos(user: string) {
		this.gitService.gitRepo(user).subscribe(userProfile => {
			this.githubData = userProfile;
		});
	}
}
