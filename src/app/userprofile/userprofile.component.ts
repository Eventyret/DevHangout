import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbTooltipConfig } from "@ng-bootstrap/ng-bootstrap";
import { find as _find } from "lodash";
import { NgxSpinnerService } from "ngx-spinner";
import { FakeService } from "../shared/services/api/fake.service";

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
		private fakeService: FakeService,
		private router: Router
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

	ngOnInit() {
		this.spinner.show();
	}

	supporterTest() {
		this.support = !this.support;
	}
	getFakeData(id) {
		this.fakeService.getFakeUsers().subscribe(
			data => {
				const userID = id;
				this.user = _find(data, function(o) {
					return o.id == userID;
				});
				this.support = this.user.profile.donator;
				this.background = this.user.profile.backgroundImage;
			},
			error => {
				console.log(error);
			},
			() => {
				this.spinner.hide();
			}
		);
	}
}
