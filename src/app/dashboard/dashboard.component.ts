import { EditProfileComponent } from "../userprofile/edit-profile/edit-profile.component";
import { EditExperienceComponent } from "./experience/edit-experience/edit-experience.component";
import { AddExperienceComponent } from "./experience/add-experience/add-experience.component";
import { EditEducationComponent } from "./education/edit-education/edit-education.component";
import { AddEducationComponent } from "./education/add-education/add-education.component";
import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from "../shared/services/auth/auth.service";
import { User } from "../shared/models/users";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
	user: User;
	support = true;
	id = localStorage.getItem("user_id");
	LocalUser = localStorage.getItem("user");
	comp: any;

	constructor(private modalService: NgbModal, private spinner: NgxSpinnerService, private auth: AuthService) {}

	ngOnInit() {
		this.spinner.show();
		this.getUserData(this.id);
	}
	open(event) {
		const target = event.target.id;
		if (target === "addEdu") {
			this.comp = AddEducationComponent;
		} else if (target === "addExp") {
			this.comp = AddExperienceComponent;
		} else if (target === "editEdu") {
			this.comp = EditEducationComponent;
		} else if (target === "editExp") {
			this.comp = EditExperienceComponent;
		} else if (target === "editProfile") {
			this.comp = EditProfileComponent;
		}
		const modalRef = this.modalService.open(this.comp, {
			centered: true,
			size: "lg",
			backdropClass: "light-blue-backdrop"
		});
		modalRef.componentInstance.name = this.user.username;
	}

	getUserData(id) {
		this.auth.getUser(id).subscribe(data => {
			localStorage.setItem("user", JSON.stringify(data));
			this.user = data;
			this.support = data.profile.donator;
			this.spinner.hide();
		});
	}
}
