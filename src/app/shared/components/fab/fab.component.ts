import { SupporterModalComponent } from "./supporter-modal/supporter-modal.component";
import { InfoModalComponent } from "./info-modal/info-modal.component";
import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal, NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { SharedService } from "../../services/misc/shared.service";

@Component({
	selector: "app-fab",
	templateUrl: "./fab.component.html",
	styleUrls: ["./fab.component.scss"]
})
export class FabComponent implements OnInit {

	private comp: any;
	public name = "";
	private loggedIn: boolean;
	public spin: any;


	/**
	 * Creates an instance of fab component.
	 * @param modalService  Handling opening a new modal
	 * @param sharedService Passing data with the username or anonymous to the other modals
	 */
	constructor(private modalService: NgbModal, private sharedService: SharedService) {}

	ngOnInit() {}


	/**
	 * Opens and controls which modal to open.
	 * This will check what button it is by it's ID then open
	 * the correct component. It will also store the username
	 * if it exists if not it will be refered to as anonymous
	 * @param event
	 */
	open(event: any) {
		const target = event.target.id;
		if (target === "infoButton") {
			this.comp = InfoModalComponent;
		} else if (target === "supporterButton") {
			this.comp = SupporterModalComponent;
		}
		if (!localStorage.getItem("username") || !this.name) {
			this.loggedIn = false;
		} else {
			this.loggedIn = true;
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
		modalRef.componentInstance.loggedIn = this.loggedIn;
	}
}
