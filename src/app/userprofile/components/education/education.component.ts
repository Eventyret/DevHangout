import { Component, OnInit, Input } from "@angular/core";
import { Education } from "../../../shared/models/users.model";

@Component({
	selector: "app-education",
	templateUrl: "./education.component.html",
	styleUrls: ["./education.component.scss"]
})
export class EducationComponent implements OnInit {

	/**
	 * The input coming from the Parent component
	 * This will contain the education for that user.
	 */
	@Input()
	edu: Education;

	constructor() {}

	ngOnInit() {}
}
