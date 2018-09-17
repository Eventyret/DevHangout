import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../../dashboard-page/services/data.service";
import { AuthService } from "../../../services/auth/auth.service";
import { User } from "../../../models/users.model";
import { DashboardComponent } from "../../../../dashboard-page/dashboard.component";
import { SharedService } from "../../../services/misc/shared.service";

@Component({
	selector: "app-thank-you-modal",
	templateUrl: "./thank-you-modal.component.html",
	styleUrls: ["./thank-you-modal.component.scss"]
})
export class ThankYouModalComponent implements OnInit {
	public name: string;
	public amount: number;
	public token: string;
	public id: number;
	public user: User;
	public info: any;
	public date: number;

	/**
	 * Creates an instance of thank you modal component.
	 * @param activeModal  The instance of this modal
	 * @param dataService  The Service handling the users profile data.
	 * @param auth Handling the users authentication and getting their updated data
	 */
	constructor(
		public activeModal: NgbActiveModal,
		private dataService: DataService,
		private auth: AuthService,
		private sharedService: SharedService
	) {}

	ngOnInit() {
		this.updateSupporterStatus();
		this.name = this.sharedService.donatorName;
	}

	/**
	 * Updating the users donation status.
	 *  @fires dataService.updateDetails We are updating the users donation status from true to false
	 * @fires dataService.newDetails We are posting the data from stripe to the backend and attach it to
	 * the users profile
	 */
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
					this.auth.getUser(this.id).subscribe(results => {
						this.user = results;
					});
				}
			);
		}
	}
}
