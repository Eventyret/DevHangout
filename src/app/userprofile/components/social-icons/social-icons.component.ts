import { Component, OnInit, Input } from "@angular/core";
import { Profile } from "../../../shared/models/users.model";

@Component({
	selector: "app-social-icons",
	templateUrl: "./social-icons.component.html",
	styleUrls: ["./social-icons.component.scss"]
})
export class SocialIconsComponent implements OnInit {


	/**
	 * The input coming from the Parent component
	 * This will contain the Profile information for that user.
	 */
	@Input()
	profile: Profile;

	constructor() {}

	ngOnInit() {}
}
