import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from "../../../services/data.service";
import { Experience } from "../../../../shared/models/users";
import { NotificationsService } from "angular2-notifications";

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
		id: new FormControl(Validators.required),
		user: new FormControl("", Validators.required),
		jobTitle: new FormControl("", Validators.required),
		company: new FormControl("", Validators.required),
		location: new FormControl(""),
		dateFrom: new FormControl("", Validators.required),
		dateTo: new FormControl(""),
		current: new FormControl(Validators.required)
	});
	constructor(public activeModal: NgbActiveModal, private dataService: DataService, private notify: NotificationsService) {}

	ngOnInit() {
		this.dataService.getDetailed("experience", this.id).subscribe(
			(data: Experience) => {
				this.experience = data;
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
	}

	onChanges() {
		this.editForm.valueChanges.subscribe(val => {
			this.updatedForm = val;
			console.log(this.updatedForm);
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
