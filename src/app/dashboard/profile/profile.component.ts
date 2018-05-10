import { Component, OnInit } from "@angular/core";
import { NgbTooltipConfig } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: "app-profile",
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.scss"],
	providers: [NgbTooltipConfig]
})
export class ProfileComponent implements OnInit {
	constructor(config: NgbTooltipConfig, private spinner: NgxSpinnerService) {
		config.placement = "top";
		config.triggers = "hover";
	}
	support = true;

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
