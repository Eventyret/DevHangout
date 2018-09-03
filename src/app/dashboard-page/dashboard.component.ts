import { EditProfileComponent } from "./components/edit-profile/edit-profile.component";
import { EditExperienceComponent } from "./components/experience/edit-experience/edit-experience.component";
import { AddExperienceComponent } from "./components/experience/add-experience/add-experience.component";
import { EditEducationComponent } from "./components/education/edit-education/edit-education.component";
import { AddEducationComponent } from "./components/education/add-education/add-education.component";
import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from "../shared/services/auth/auth.service";
import { User, Profile } from "../shared/models/users";
import { DataService } from "./services/data.service";
import { NotificationsService } from "angular2-notifications";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
	user: User;
	support = false;
	id: number = parseInt(localStorage.getItem("user_id"), 10);
	LocalUser = localStorage.getItem("user");
	comp: any;
	profile: Profile;

	constructor(
		private modalService: NgbModal,
		private spinner: NgxSpinnerService,
		private auth: AuthService,
		private dataService: DataService,
		private notify: NotificationsService
	) {}

	ngOnInit() {
		this.spinner.show();
		this.getUserData(this.id);
	}
	open(event: any, id?: number) {
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
			backdropClass: "light-blue-backdrop",
			backdrop: "static"
		});
		modalRef.componentInstance.name = this.user.username;
		modalRef.componentInstance.id = id;
	}

	getUserData(id) {
		this.auth.getUser(id).subscribe((data: User) => {
			localStorage.setItem("user", JSON.stringify(data));
			this.user = data;
			this.profile = data.profile[0];
			this.support = data.profile[0].donator;
			this.spinner.hide();
		});
	}
	deleteDetail(event, id, name) {
		const target = event.target.id;
		if (target === "deleteEdu") {
			this.comp = "Education";
		} else if (target === "deleteExp") {
			this.comp = "Experience";
		}
		this.dataService.deleteDetails(this.comp, id).subscribe(
			result => {},
			error => {
				console.log(error);
				this.notify.error(error);
			},
			() => {
				this.notify.success(name + " was successfully deleted");
			}
		);
	}
}
