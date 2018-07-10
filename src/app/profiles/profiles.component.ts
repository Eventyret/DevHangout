import { Component, OnInit } from "@angular/core";
import { FakeService } from "../shared/services/api/fake.service";
import { User, Skills, Profile } from "../shared/models/users";
import { NgxSpinnerService } from "ngx-spinner";
import { unionBy as _unionBy } from "lodash";
@Component({
	selector: "app-profiles",
	templateUrl: "./profiles.component.html",
	styleUrls: ["./profiles.component.scss"]
})
export class ProfilesComponent implements OnInit {
	users: any[];
	skills: any[];

	constructor(public fakeService: FakeService, private spinner: NgxSpinnerService) {}

	ngOnInit() {
		this.spinner.show();
		this.getDevelopers();
	}

	getDevelopers() {
		this.fakeService.getFakeUsers().subscribe(
			data => {
				this.users = data;
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
