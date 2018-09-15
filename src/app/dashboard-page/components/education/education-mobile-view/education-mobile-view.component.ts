import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../../shared/models/users.model";

@Component({
	selector: "education-mobile-view",
	templateUrl: "./education-mobile-view.component.html",
	styleUrls: ["./education-mobile-view.component.scss"]
})
export class EducationMobileViewComponent implements OnInit {
	@Input()
	user: User;

	constructor() {}

	ngOnInit() {}
}
