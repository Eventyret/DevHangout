import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../services/data.service";
import { Experience } from "../../../../shared/models/users.model";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { NotificationsService } from "angular2-notifications";
import { AuthService } from "../../../../shared/services/auth/auth.service";

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
	updatedForm: Experience;
	today = new Date().toJSON().slice(0, 10);

	addForm = new FormGroup({
		current: new FormControl(false, Validators.required),
		dateFrom: new FormControl("", Validators.required),
		dateTo: new FormControl(this.today),
		company: new FormControl("", Validators.required),
		jobTitle: new FormControl("", Validators.required),
		location: new FormControl(""),
		user: new FormControl(parseInt(localStorage.getItem("user_id"), 10), Validators.required)
	});

	constructor(
		public activeModal: NgbActiveModal,
		private dataService: DataService,
		private notify: NotificationsService,
		private auth: AuthService
	) {}

	ngOnInit() {
		this.auth.refreshToken().subscribe(nothing => {
			this.onChanges();
		});
	}
	onChanges() {
		this.addForm.valueChanges.subscribe(val => {
			this.updatedForm = val;
		});
		this.addForm.get("current").valueChanges.subscribe(val => {
			this.current = !this.current;
		});
	}

	add() {
		this.dataService.newDetails("experience", this.updatedForm).subscribe(
			results => {},
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
