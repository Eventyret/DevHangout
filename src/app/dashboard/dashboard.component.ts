import { DeleteAccountComponent } from "./profile/delete-account/delete-account.component";
import { EditExperienceComponent } from "./experience/edit-experience/edit-experience.component";
import { AddExperienceComponent } from "./experience/add-experience/add-experience.component";
import { EditEducationComponent } from "./education/edit-education/edit-education.component";
import { AddEducationComponent } from "./education/add-education/add-education.component";
import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
	username: string = "Simen";
	comp;

	constructor(private modalService: NgbModal) {}

	ngOnInit() {}
	open(event) {
		let target = event.target.id;
		if (event.target.id == "addEdu") {
			this.comp = AddEducationComponent;
		} else if (target == "addExp") {
			this.comp = AddExperienceComponent;
		} else if (target == "editEdu") {
			this.comp = EditEducationComponent;
		} else if (target == "editExp") {
			this.comp = EditExperienceComponent;
		} else if (target == "delAcc"){
			this.comp = DeleteAccountComponent
		}
		const modalRef = this.modalService.open(this.comp, {
			centered: true,
			size: "lg",
			backdropClass: "light-blue-backdrop",
		});
		modalRef.componentInstance.name = this.username;
	}
}
