import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal, NgbCheckBox } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../services/data.service";
import { Education } from "../../../../shared/models/users.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NotificationsService } from "angular2-notifications";
import { AuthService } from "../../../../shared/services/auth/auth.service";

@Component({
	selector: "app-edit-education",
	templateUrl: "./edit-education.component.html",
	styleUrls: ["./edit-education.component.scss"]
})
export class EditEducationComponent implements OnInit {
	id: number;
	education: Education;
	updatedForm: Education;
	current: boolean;
	user: number;

	editForm = new FormGroup({
		current: new FormControl(this.current, Validators.required),
		id: new FormControl("", Validators.required),
		dateFrom: new FormControl("", Validators.required),
		dateTo: new FormControl(),
		fieldOfStudy: new FormControl("", Validators.required),
		qualification: new FormControl("", Validators.required),
		school: new FormControl("", Validators.required),
		user: new FormControl("", Validators.required)
	});

	constructor(
		public activeModal: NgbActiveModal,
		private dataService: DataService,
		private notify: NotificationsService,
		private auth: AuthService
	) {}

	ngOnInit() {
		this.auth.refreshToken().subscribe(nothing => {
			this.dataService.getDetailed("education", this.id).subscribe(
				(data: Education) => {
					this.education = data;
					this.user = data.user;
					this.current = data.current;
					this.editForm.patchValue({
						current: data.current,
						dateFrom: data.dateFrom,
						dateTo: data.dateTo,
						fieldOfStudy: data.fieldOfStudy,
						id: data.id,
						qualification: data.qualification,
						school: data.school,
						user: data.user
					});
				},
				error => {
					console.log(error);
				},
				() => {
					this.onChanges();
				}
			);
		});
	}
	onChanges() {
		this.editForm.valueChanges.subscribe(val => {
			this.updatedForm = val;
		});
		this.editForm.get("current").valueChanges.subscribe(val => {
			this.current = !this.current;
		});
	}
	update() {
		this.dataService.updateDetails("education", this.id, this.updatedForm).subscribe(
			results => {},
			error => {
				console.log(error);
				this.notify.error(error.message);
			},
			() => {
				this.notify.success("Education Updated");
				this.activeModal.close();
			}
		);
	}
}
