import { Component, OnInit } from "@angular/core";
import { NgbTooltipConfig } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../../shared/models/users";
import { FakeService } from "../../shared/services/api/fake.service";
import { find as _find } from "lodash";

@Component({
	selector: "app-profile",
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.scss"],
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
				this.support = this.user.supporter;
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
