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
	info: any;
	card: any;
	constructor(public activeModal: NgbActiveModal, private dataService: DataService, private auth: AuthService) {}

	ngOnInit() {
		this.updateSupporterStatus();
		console.log(this.info);
	}

	updateSupporterStatus() {
		const donationStatus = {
			donator: true
		};
		const donationInfo = {
			user: this.id,
			amount: this.amount,
			date: this.info.created,
			token: this.token,
			ip: this.info.client_ip
		};
		console.log(donationInfo);
		this.dataService.updateDetails("profile", this.id, donationStatus).subscribe(
			results => {
				console.log(results);
			},
			error => {
				console.log(error);
			},
			() => {
				this.auth.getUser(this.id).subscribe(result => {
					this.user = result;
				});
			}
		);
		this.dataService.newDetails("donations", this.id);
	}
}
