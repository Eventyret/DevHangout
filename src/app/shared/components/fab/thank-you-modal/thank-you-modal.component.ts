import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../../dashboard-page/services/data.service";
import { AuthService } from "../../../services/auth/auth.service";
import { User } from "../../../models/users.model";
import { DashboardComponent } from "../../../../dashboard-page/dashboard.component";

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
	date: number;
	constructor(
		public activeModal: NgbActiveModal,
		private dataService: DataService,
		private auth: AuthService,
		private dashboardComponent:
		DashboardComponent) {}

	ngOnInit() {
		this.updateSupporterStatus();
	}

	updateSupporterStatus() {
		if (this.id) {
			const donationStatus = {
				donator: true
			};
			const donationInfo = {
				id: this.id,
				user: this.id,
				amount: this.amount,
				date: this.info.created,
				token: this.token,
				ip: this.info.client_ip
			};
			this.dataService.updateDetails("profile", this.id, donationStatus).subscribe(
				results => {},
				error => {
					console.log(error);
				},
				() => {
					this.auth.getUser(this.id).subscribe(result => {
						this.user = result;
					});
				}
			);
			this.dataService.newDetails("donations", donationInfo).subscribe(
				results => {},
				error => {
					console.log(error);
				},
				() => {
					this.dashboardComponent.getUserData(this.id);
					this.auth.getUser(this.id).subscribe(results => {
						this.user = results;
					});
				}
			);
		}
	}
}
