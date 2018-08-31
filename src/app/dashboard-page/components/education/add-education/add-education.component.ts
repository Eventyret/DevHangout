import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Education } from "../../../../shared/models/users";
import { DataService } from "../../../services/data.service";

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

	constructor(public activeModal: NgbActiveModal, private dataService: DataService) {}

	ngOnInit() {
		this.onChanges();
	}
	onChanges() {
		this.addForm.get("current").valueChanges.subscribe(val => {
			this.current = !this.current;
		});
	}
	add(form) {
		console.log(form);
	}
}
