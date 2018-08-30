import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from "../../../services/data.service";
import { Experience } from "../../../../shared/models/users";

@Component({
	selector: "app-edit-experience",
	templateUrl: "./edit-experience.component.html",
	styleUrls: ["./edit-experience.component.scss"]
})
export class EditExperienceComponent implements OnInit {
	name: string;
	experience: Experience
	id: number;
	current: boolean

	editForm = new FormGroup({
		company: new FormControl("", Validators.required),
		jobtitle: new FormControl("", Validators.required),
		location: new FormControl(""),
		from: new FormControl("", Validators.required),
		to: new FormControl(""),
		current: new FormControl(Validators.required),
	});
	constructor(public activeModal: NgbActiveModal, private dataService: DataService) {}


	ngOnInit() {
		this.dataService.getDetailed("experience", this.id).subscribe(
			(data: Experience) => {
				this.experience = data;
				this.editForm.patchValue({
					company: data.company,
					jobtitle: data.jobTitle,
					location: data.location,
					from: data.dateFrom,
					to: data.dateTo,
					current: data.current
				})
			}, error => {
				console.log(error)
			},
			() => {
				this.onChanges();
			}
		)
	}

	onChanges() {
		this.editForm.get("current").valueChanges.subscribe(val => {
			this.current = !this.current;
		})
	}

	update(form){
		console.log(form);
	}
}
