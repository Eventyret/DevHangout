import { Component, OnInit } from "@angular/core";
import { FakeService } from "../shared/services/fake.service";
import { Users } from "../shared/models/users";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
	selector: "app-profiles",
	templateUrl: "./profiles.component.html",
	styleUrls: ["./profiles.component.scss"]
})
export class ProfilesComponent implements OnInit {
	users: Users[];

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
