import { Component, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "../../login/login.component";
import { SupporterModalComponent } from "../supporter-modal/supporter-modal.component";
import { SharedService } from "../../../services/shared.service";

@Component({
	selector: "app-info-modal",
	templateUrl: "./info-modal.component.html",
	styleUrls: ["./info-modal.component.scss"]
})
export class InfoModalComponent implements OnInit {
	name: string;
	comp: any;
	loggedIn: boolean;

	constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private sharedService: SharedService) {}

	ngOnInit() {}

	open(event) {
		this.activeModal.dismiss();
		const target = event.target.id;
		if (target === "login") {
			this.comp = LoginComponent;
		} else if (target === "donate") {
			this.comp = SupporterModalComponent;
		}
		if (localStorage.getItem("username")) {
			this.name = localStorage.getItem("username");
		} else if (!localStorage.getItem("username")) {
			this.name = this.sharedService.donatorName;
		}
		const modalRef = this.modalService.open(this.comp, {
			centered: true,
			size: "lg",
			backdrop: "static"
		});
		modalRef.componentInstance.name = this.name;
	}
}
