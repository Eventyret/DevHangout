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
	username: string;
	spin: any;
	constructor(private modalService: NgbModal) {}
	ngOnInit() {}

	open(event: any) {
		const target = event.target.id;
		if (localStorage.getItem("username")) {
			this.username = localStorage.getItem("username");
		} else {
			this.username = "Anonymous";
		}
		if (target === "infoButton") {
			this.comp = InfoModalComponent;
		} else if (target === "supporterButton") {
			this.comp = SupporterModalComponent;
		}
		const modalRef = this.modalService.open(this.comp, {
			centered: true,
			size: "lg",
			backdropClass: "light-blue-backdrop",
			backdrop: "static"
		});
		modalRef.componentInstance.name = this.username;
	}
}
