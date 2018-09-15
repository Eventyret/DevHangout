import { Component, OnInit, Input } from "@angular/core";
import { Profile } from "../../../shared/models/users.model";

@Component({
	selector: "app-social-icons",
	templateUrl: "./social-icons.component.html",
	styleUrls: ["./social-icons.component.scss"]
})
export class SocialIconsComponent implements OnInit {
	@Input()
	profile: Profile;

	constructor() {}

	ngOnInit() {}
}
