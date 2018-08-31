import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../services/data.service";
import { Experience } from "../../../../shared/models/users";
import { Validators, FormGroup, FormControl } from "@angular/forms";

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
