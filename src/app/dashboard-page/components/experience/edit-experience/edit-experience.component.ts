import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: "app-edit-experience",
	templateUrl: "./edit-experience.component.html",
	styleUrls: ["./edit-experience.component.scss"]
})
export class EditExperienceComponent implements OnInit {
	name;
	id;
	constructor(public activeModal: NgbActiveModal) {}


	ngOnInit() {}
}
