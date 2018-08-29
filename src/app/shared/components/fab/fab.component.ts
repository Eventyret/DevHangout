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
	constructor(private modalService: NgbModal) {}
	spin;
	ngOnInit() {}

	openInfo() {
		this.modalService.open(InfoModalComponent, {
			centered: true,
			size: "lg"
		});
	}
	openSupporter() {
		this.modalService.open(SupporterModalComponent, {
			centered: true,
			size: "lg",
			backdrop: "static"
		});
	}
}
