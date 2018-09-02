import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal, NgbCheckBox } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../services/data.service";
import { Education } from "../../../../shared/models/users";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NotificationsService } from "angular2-notifications";

@Component({
	selector: "app-edit-education",
	templateUrl: "./edit-education.component.html",
	styleUrls: ["./edit-education.component.scss"]
})
export class EditEducationComponent implements OnInit {
	id: number;
	education: Education;
	current: boolean;
	updatedForm: Education;
	user: number;

	editForm = new FormGroup({
		current: new FormControl(Validators.required),
		id: new FormControl("",Validators.required),
		dateFrom: new FormControl("", Validators.required),
		dateTo: new FormControl(),
		fieldOfStudy: new FormControl("", Validators.required),
		qualification: new FormControl("", Validators.required),
		school: new FormControl("", Validators.required),
		user: new FormControl("", Validators.required),
	});

	constructor(public activeModal: NgbActiveModal, private dataService: DataService,private notify: NotificationsService) {}

	ngOnInit() {
		this.dataService.getDetailed("education", this.id).subscribe(
			(data: Education) => {
				this.education = data;
				this.user = data.user;
				this.editForm.patchValue({
					current: data.current,
					dateFrom: data.dateFrom,
					dateTo: data.dateTo,
					fieldOfStudy: data.fieldOfStudy,
					id: data.id,
					qualification: data.qualification,
					school: data.school,
					user: data.user,
				});
				console.log(data);
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
		this.dataService.updateDetails("education", this.id, this.updatedForm).subscribe(results => {
			console.log(results);
		}, error => {
			console.log(error)
			this.notify.error("Seems there was an issue ?", error);
		},() => {
			this.notify.success("Education Updated")
			this.activeModal.close();
		})
	}
}
