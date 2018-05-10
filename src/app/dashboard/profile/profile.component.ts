import { Component, OnInit } from "@angular/core";
import { NgbTooltipConfig } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from "@angular/router";
import { Users } from "../../shared/api/users";

@Component({
	selector: "app-profile",
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.scss"],
	providers: [NgbTooltipConfig]
})
export class ProfileComponent implements OnInit {
	constructor(config: NgbTooltipConfig, private spinner: NgxSpinnerService, private route: ActivatedRoute) {
		config.placement = "top";
		config.triggers = "hover";
		this.route.params.subscribe(params => console.log(params.id));
	}
	support = true;
	user: Users[];

	ngOnInit() {
		this.spinner.show();
		setTimeout(() => {
			/** spinner ends after 5 seconds */
			this.spinner.hide();
		}, 2000);
	}

	supporterTest() {
		this.support = !this.support;
	}
}
