import { Component, OnInit, Input } from "@angular/core";
import { Education } from "../../../shared/models/users.model";

@Component({
	selector: "app-education",
	templateUrl: "./education.component.html",
	styleUrls: ["./education.component.scss"]
})
export class EducationComponent implements OnInit {
	@Input()
	edu: Education;

	constructor() {}

	ngOnInit() {}
}
