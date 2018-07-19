import { GithubService } from "./../shared/services/api/github.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbTooltipConfig } from "@ng-bootstrap/ng-bootstrap";
import { find as _find } from "lodash";
import { NgxSpinnerService } from "ngx-spinner";
import { FakeService } from "../shared/services/api/fake.service";
import { AuthService } from "../shared/services/auth/auth.service";

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
		private router: Router,
		private gitService: GithubService
	) {
		config.placement = "top";
		config.triggers = "hover";
		this.route.params.subscribe(params => {
			const id = params.id;
			this.getFakeData(id);
		});
	}
	user: any;
	support: boolean;
	background: string;
	normalBackground = "../../assets/landingBG.png";
	githubData: any[];

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
					this.support = this.user.profile.donator;
					this.background = this.user.profile.backgroundImage;
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
				console.log(data);
				this.user = data;
				this.support = data.profile.donator;
				this.getRepos(this.user.profile.github);
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
