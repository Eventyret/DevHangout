import { SupporterModalComponent } from "./supporter-modal/supporter-modal.component";
import { InfoModalComponent } from "./info-modal/info-modal.component";
import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal, NgbTooltip } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: "app-fab",
	templateUrl: "./fab.component.html",
	styleUrls: ["./fab.component.scss"]
})
export class FabComponent implements OnInit {
	comp: any;
	name: string;
	loggedIn: boolean;
	spin: any;
	constructor(private modalService: NgbModal) {}
	ngOnInit() {
	}

	open(event: any) {
		const target = event.target.id;
		if (target === "infoButton") {
			this.comp = InfoModalComponent;
		} else if (target === "supporterButton") {
			this.comp = SupporterModalComponent;
		}
		if (!localStorage.getItem("username")  || !this.name) {
			this.loggedIn = false;
			this.name = "Anonymous";
		} else {
			this.loggedIn = true;
			this.name = localStorage.getItem("username");
		}
		const modalRef = this.modalService.open(this.comp, {
			centered: true,
			size: "lg",
			backdropClass: "light-blue-backdrop",
			backdrop: "static"
		});
		modalRef.componentInstance.name = this.name;
		modalRef.componentInstance.loggedIn = this.loggedIn;
	}
}
