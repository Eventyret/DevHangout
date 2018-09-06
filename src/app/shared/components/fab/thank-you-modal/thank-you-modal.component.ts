import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../../dashboard-page/services/data.service";
import { AuthService } from "../../../services/auth/auth.service";
import { User } from "../../../models/users";

@Component({
	selector: "app-thank-you-modal",
	templateUrl: "./thank-you-modal.component.html",
	styleUrls: ["./thank-you-modal.component.scss"]
})
export class ThankYouModalComponent implements OnInit {
	name: string;
	amount: number;
	token: string;
	id: number;
	user: User;
	constructor(public activeModal: NgbActiveModal, private dataService: DataService, private auth: AuthService) {}

	ngOnInit() {
		this.updateSupporterStatus();
	}

	updateSupporterStatus() {
		const data = {
			donator: true
		};
		this.dataService.updateDetails("profile", this.id, data).subscribe(
			results => {
				console.log(results);
			},
			error => {
				console.log(error);
			},
			() => {
				this.auth.getUser(this.id).subscribe(data => {
					this.user = data;
				});
			}
		);
	}
}
