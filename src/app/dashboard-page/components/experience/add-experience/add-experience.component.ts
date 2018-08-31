import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../services/data.service";
import { Experience } from "../../../../shared/models/users";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { NotificationsService } from "angular2-notifications";

@Component({
	selector: "app-add-experience",
	templateUrl: "./add-experience.component.html",
	styleUrls: ["./add-experience.component.scss"]
})
export class AddExperienceComponent implements OnInit {
	name: string;
	experience: Experience;
	id: number;
	current = false;

	addForm = new FormGroup({
		company: new FormControl("", Validators.required),
		jobtitle: new FormControl("", Validators.required),
		location: new FormControl(""),
		from: new FormControl("", Validators.required),
		to: new FormControl(""),
		current: new FormControl(Validators.required)
	});

	constructor(public activeModal: NgbActiveModal, private dataService: DataService, private notify: NotificationsService) {}

	ngOnInit() {
		this.onChanges();
	}

	onChanges() {
		this.addForm.valueChanges.subscribe(val => {
			this.current = !this.current;
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
