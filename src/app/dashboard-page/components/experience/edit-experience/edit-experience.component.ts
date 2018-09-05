import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from "../../../services/data.service";
import { Experience } from "../../../../shared/models/users";
import { NotificationsService } from "angular2-notifications";
import { AuthService } from "../../../../shared/services/auth/auth.service";

@Component({
	selector: "app-edit-experience",
	templateUrl: "./edit-experience.component.html",
	styleUrls: ["./edit-experience.component.scss"]
})
export class EditExperienceComponent implements OnInit {
	id: number;
	name: string;
	experience: Experience;
	updatedForm: Experience;
	current: boolean;
	user: number;

	editForm = new FormGroup({
		current: new FormControl(this.current, Validators.required),
		id: new FormControl(Validators.required),
		dateFrom: new FormControl("", Validators.required),
		dateTo: new FormControl(""),
		jobTitle: new FormControl("", Validators.required),
		location: new FormControl(""),
		company: new FormControl("", Validators.required),
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
			this.dataService.getDetailed("experience", this.id).subscribe(
				(data: Experience) => {
					this.experience = data;
					this.current = data.current;
					this.editForm.patchValue({
						id: data.id,
						user: data.user,
						jobTitle: data.jobTitle,
						company: data.company,
						location: data.location,
						dateFrom: data.dateFrom,
						dateTo: data.dateTo
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
		this.dataService.updateDetails("experience", this.id, this.updatedForm).subscribe(
			results => {
				console.log(results);
			},
			error => {
				console.log(error);
				this.notify.error("Seems there was an issue ?", error);
			},
			() => {
				this.notify.success("Experience Updated");
				this.activeModal.close();
				this.ngOnInit();
			}
		);
	}
}
