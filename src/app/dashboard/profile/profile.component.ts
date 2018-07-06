import { Component, OnInit } from "@angular/core";
import { NgbTooltipConfig } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from "@angular/router";
import { Users } from "../../shared/models/users";
import { FakeService } from "../../shared/services/api/fake.service";

@Component({
	selector: "app-profile",
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.scss"],
	providers: [NgbTooltipConfig]
})
export class ProfileComponent implements OnInit {
	constructor(config: NgbTooltipConfig, private spinner: NgxSpinnerService, private route: ActivatedRoute, private fakeService: FakeService) {
		config.placement = "top";
		config.triggers = "hover";
		this.route.params.subscribe(params => {
			const id = params.id;
			this.getFakeData(id);
		});
	}
	user: Users;
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
				this.user = data[id];
				this.support = data[id].supporter;
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
