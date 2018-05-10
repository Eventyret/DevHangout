import { Component, OnInit } from "@angular/core";
import { FakeService } from "../shared/api/fake.service";
import { Users } from "../shared/api/users";
@Component({
	selector: "app-profiles",
	templateUrl: "./profiles.component.html",
	styleUrls: ["./profiles.component.scss"]
})
export class ProfilesComponent implements OnInit {
	userList: Users[];

	constructor(public fakeService: FakeService) {}

	ngOnInit() {
		this.fakeService.getFakeUsers().subscribe(data => {
			this.userList = data;
			console.log(this.userList);
		});
	}
}
