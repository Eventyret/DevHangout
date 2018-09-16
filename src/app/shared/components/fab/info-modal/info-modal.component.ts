import { Component, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "../../login/login.component";
import { SupporterModalComponent } from "../supporter-modal/supporter-modal.component";
import { SharedService } from "../../../services/misc/shared.service";

@Component({
	selector: "app-info-modal",
	templateUrl: "./info-modal.component.html",
	styleUrls: ["./info-modal.component.scss"]
})
export class InfoModalComponent implements OnInit {
	name: string;
	comp: any;
	loggedIn: boolean;


	/**
	 * Creates an instance of info modal component.
	 * @param activeModal  The instance of this modal
	 * @param modalService Handling opening a new modal
	 * @param sharedService Passing data with the username or anonymous to the other modals
	 */
	constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private sharedService: SharedService) {}

	ngOnInit() {}


	/**
	 * Opens the modal either for donate or the login.
	 * This depends if the user is logged in or not.
	 * @param event - This is the ID of the button
	 * so we know what modal to open
	 */
	open(event) {
		const target = event.target.id;
		if (target === "login") {
			this.comp = LoginComponent;
		} else if (target === "donate") {
			this.comp = SupporterModalComponent;
		}
		const modalRef = this.modalService.open(this.comp, {
			centered: true,
			size: "lg",
			backdrop: "static",
			beforeDismiss: () => {
				this.sharedService.setDonatorName(this.name);
				return true;
			}
		});
		modalRef.componentInstance.name = this.sharedService.donatorName;
	}
}
