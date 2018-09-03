import { GithubService } from "./../shared/services/api/github.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbTooltipConfig } from "@ng-bootstrap/ng-bootstrap";
import { find as _find } from "lodash";
import { NgxSpinnerService } from "ngx-spinner";
import { FakeService } from "../shared/services/api/fake.service";
import { AuthService } from "../shared/services/auth/auth.service";
import { User, Profile } from "../shared/models/users";

@Component({
	selector: "app-profile",
	templateUrl: "./userprofile.component.html",
	styleUrls: ["./userprofile.component.scss"],
	providers: [NgbTooltipConfig]
})
export class ProfileComponent implements OnInit {
	constructor(
		config: NgbTooltipConfig,
		private spinner: NgxSpinnerService,
		private route: ActivatedRoute,
		private auth: AuthService,
		private fakeService: FakeService,
		private gitService: GithubService
	) {
		config.placement = "top";
		config.triggers = "hover";
		this.route.params.subscribe(params => {
			const id = params.id;
			this.getFakeData(id);
		});
	}
	user: User;
	support: boolean;
	background: string;
	normalBackground = "../../assets/landingBG.png";
	githubData: any[];
	profile: Profile;

	ngOnInit() {
		this.spinner.show();
	}

	supporterTest() {
		this.support = !this.support;
	}
	getFakeData(id) {
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
				console.log(this.user);
				this.profile = data.profile[0];
				this.support = data.profile[0].donator;
				this.getRepos(this.user.profile[0].github);
				this.spinner.hide();
			});
		}
	}
	getRepos(user) {
		this.gitService.gitRepo(user).subscribe(userProfile => {
			this.githubData = userProfile;
		});
	}
}
