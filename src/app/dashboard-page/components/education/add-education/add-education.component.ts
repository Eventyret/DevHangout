import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Education } from "../../../../shared/models/users";
import { DataService } from "../../../services/data.service";
import { NotificationsService } from "angular2-notifications";
import { AuthService } from "../../../../shared/services/auth/auth.service";

@Component({
	selector: "app-add-education",
	templateUrl: "./add-education.component.html",
	styleUrls: ["./add-education.component.scss"]
})
export class AddEducationComponent implements OnInit {
	education: Education;
	updatedForm: Education;
	current: boolean;
	user: number;
	name: string;
	id: number;


	addForm = new FormGroup({
		current: new FormControl(false, Validators.required),
		dateFrom: new FormControl("", Validators.required),
		dateTo: new FormControl(),
		fieldOfStudy: new FormControl("", Validators.required),
		qualification: new FormControl("", Validators.required),
		school: new FormControl("", Validators.required),
		user: new FormControl((this.user = parseInt(localStorage.getItem("user_id"), 10)), Validators.required)
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
		this.dataService.newDetails("education", this.updatedForm).subscribe(
			results => {},
			error => {
				console.log(error);
				this.notify.error("Seems there was an issue ?", error);
			},
			() => {
				this.notify.success("Education Added");
				this.activeModal.close();
			}
		);
	}
}
