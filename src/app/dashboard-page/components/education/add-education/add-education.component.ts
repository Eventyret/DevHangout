import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Education } from "../../../../shared/models/users";
import { DataService } from "../../../services/data.service";
import { NotificationsService } from "angular2-notifications";

@Component({
	selector: "app-add-education",
	templateUrl: "./add-education.component.html",
	styleUrls: ["./add-education.component.scss"]
})
export class AddEducationComponent implements OnInit {
	name: string;
	id: number;
	education: Education;
	current: boolean;

	addForm = new FormGroup({
		school: new FormControl("", Validators.required),
		degree: new FormControl("", Validators.required),
		fieldofstudy: new FormControl("", Validators.required),
		from: new FormControl("", Validators.required),
		to: new FormControl(),
		current: new FormControl(Validators.required)
	});

	constructor(public activeModal: NgbActiveModal, private dataService: DataService, private notify: NotificationsService) {}

	ngOnInit() {
		this.onChanges();
	}
	onChanges() {
		this.addForm.valueChanges.subscribe(val => {
			this.current = !val.current;
		});
	}

	add(form) {
		let data = {
			user: this.id,
			jobTitle: form.jobTitle,
			company: form.company,
			location: form.location,
			dateFrom: form.dateFrom,
			dateTo: form.dateTo,
			current: form.current
		};
		this.dataService.newDetails("education", this.id, data).subscribe(
			results => {
				console.log(results);
			},
			error => {
				console.log(error);
				this.notify.error("Seems there was an issue ?", error);
			},
			() => {
				this.notify.success("Experience Added");
				this.activeModal.close();
			}
		);
	}
}
