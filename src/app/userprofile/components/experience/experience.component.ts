import { Component, OnInit, Input } from "@angular/core";
import { Experience } from "../../../shared/models/users.model";

@Component({
	selector: "app-experience",
	templateUrl: "./experience.component.html",
	styleUrls: ["./experience.component.scss"]
})
export class ExperienceComponent implements OnInit {


	/**
	 * The input coming from the Parent component
	 * This will contain the experience for that user.
	 */
	@Input()
	exp: Experience;

	constructor() {}

	ngOnInit() {}
}
