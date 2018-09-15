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
	public name: string;
	private loggedIn: boolean;
	/** Makes the icons spin on mouse over */
	public spin: any;
	constructor(private modalService: NgbModal, private sharedService: SharedService) {}
	ngOnInit() {}

	open(event: any) {
		const target = event.target.id;
		if (target === "infoButton") {
			this.comp = InfoModalComponent;
		} else if (target === "supporterButton") {
			this.comp = SupporterModalComponent;
		}
		if (!localStorage.getItem("username") || !this.name) {
			this.loggedIn = false;
			this.name = "Anonymous";
		} else {
			this.loggedIn = true;
			this.name = localStorage.getItem("username");
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
		modalRef.componentInstance.name = this.name;
		modalRef.componentInstance.loggedIn = this.loggedIn;
	}
}
