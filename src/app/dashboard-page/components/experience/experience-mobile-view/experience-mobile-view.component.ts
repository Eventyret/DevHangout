import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../../shared/models/users.model";

@Component({
	selector: "experience-mobile-view",
	templateUrl: "./experience-mobile-view.component.html",
	styleUrls: ["./experience-mobile-view.component.scss"]
})
export class ExperienceMobileViewComponent implements OnInit {

	/**
	 * Input  of donations mobile view component
	 * The user object passed from it's parent
	 */
	@Input()
	user: User;

	constructor() {}

	ngOnInit() {}
}
