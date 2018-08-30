import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../services/data.service";
import { Education } from "../../../../shared/models/users";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: "app-edit-education",
	templateUrl: "./edit-education.component.html",
	styleUrls: ["./edit-education.component.scss"]
})
export class EditEducationComponent implements OnInit {
	id: number;
	education: Education;
	current: boolean;

	editForm = new FormGroup({
		school: new FormControl("" Validators.required),
		degree: new FormControl("", Validators.required),
		fieldofstudy: new FormControl("", Validators.required),
		from: new FormControl("", Validators.required),
		to: new FormControl("", Validators.required),
		current: new FormControl("", Validators.required),
	});

	constructor(public activeModal: NgbActiveModal, private dataService: DataService) {}

	ngOnInit() {
		this.dataService.getDetailed("education", this.id).subscribe(
			(data: Education) => {
				this.education = data;
				this.current = data.current;
			},
			error => {
				console.log(error);
			},
			() => {}
		);
	}
	update(formValue) {
		console.log(formValue);
	}
}
