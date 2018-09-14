import { EditProfileComponent } from "./components/edit-profile/edit-profile.component";
import { EditExperienceComponent } from "./components/experience/edit-experience/edit-experience.component";
import { AddExperienceComponent } from "./components/experience/add-experience/add-experience.component";
import { EditEducationComponent } from "./components/education/edit-education/edit-education.component";
import { AddEducationComponent } from "./components/education/add-education/add-education.component";
import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from "../shared/services/auth/auth.service";
import { User, Profile } from "../shared/models/users.model";
import { DataService } from "./services/data.service";
import { NotificationsService } from "angular2-notifications";
import { SkillsComponent } from "./components/skills/skills.component";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
	public user: User;
	public support = false;
	private id: number = parseInt(localStorage.getItem("user_id"), 10);
	private comp: any;
	public profile: Profile;
	private firstVisit: boolean;

	/**
	 * Creates an instance of dashboard component.
	 * @param modalService
	 * @param spinner
	 * @param auth
	 * @param dataService
	 * @param notify
	 */
	constructor(
		private modalService: NgbModal,
		private spinner: NgxSpinnerService,
		private auth: AuthService,
		private dataService: DataService,
		private notify: NotificationsService
	) {}

	ngOnInit() {
		this.spinner.show();
		this.firstVisit = JSON.parse(sessionStorage.getItem("firstVisit"));
		this.getUserData(this.id);
	}

	/**
	 * Opens the different modals
	 * @param event - The button click to find out what the id is.
	 * @param {number} id Optional but if we pass an ID we store it to pass to the modals.
	 */
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
		} else if (target === "editSkills") {
			this.comp = SkillsComponent;
		}
		const modalRef = this.modalService.open(this.comp, {
			centered: true,
			size: "lg",
			backdrop: "static"
		});
		modalRef.componentInstance.name = this.user.username;
		modalRef.componentInstance.id = id;

		modalRef.result.then(
			onfulfilled => {
				this.auth.refreshToken().subscribe(val => {
					this.getUserData(this.id);
				});
			},
			onrejected => {
				this.auth.refreshToken().subscribe(val => {});
				this.notify.info(onrejected);
			}
		);
	}

	/**
	 * This will open a href link in a new window.
	 * As we need to go outside the Angular Application
	 * we pass window.open and the website the user clicked on
	 */
	openLink() {
		window.open("//" + this.profile.website, "_blank");
	}

	/**
	 * This gets the user data from the service.
	 * If this is the first time the user visits we will automatically
	 * open EditProfileComponent
	 * @param id
	 */
	private getUserData(id: number) {
		this.auth.getUser(id).subscribe((data: User) => {
			this.user = data;
			this.profile = data.profile[0];
			this.support = data.profile[0].donator;
			this.spinner.hide();
			if (this.firstVisit) {
				const modalRef = this.modalService.open(EditProfileComponent, {
					centered: true,
					size: "lg",
					backdrop: "static"
				});
				modalRef.componentInstance.name = this.user.username;
				modalRef.componentInstance.id = id;
			}
		});
	}

	/**
	 * This will delete
	 * @param {any}event The event id of the button
	 * @param {number}id  the ID of the object
	 * @param {string} name the name component
	 *
	 */
	public deleteDetail(event: any, id: number, name: string) {
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
				this.getUserData(this.id);
			}
		);
	}
}
