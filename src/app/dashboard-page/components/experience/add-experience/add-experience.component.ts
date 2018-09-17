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
	public experience: Experience;
	private updatedForm: Experience;
	public current = false;
	public name: string;
	private today = new Date().toJSON().slice(0, 10);

	/**
	 * Creates an instance of add education component.
	 * @param activeModal The instance of this modal
	 * @param dataService Responsible for the CRUD operations.
	 * @param notify Responsible for notifying the user with a toast message
	 * @param auth  Responsible for making sure the user is authenticated
	 * and refreshing the refreshToken
	 */
	constructor(
		public activeModal: NgbActiveModal,
		private dataService: DataService,
		private notify: NotificationsService,
		private auth: AuthService
	) {}

	/**
	 * The form the user fills out to add new education data.
	 * We are also adding the user by parsing it from localStorage.
	 */
	public addForm = new FormGroup({
		current: new FormControl(false, Validators.required),
		dateFrom: new FormControl("", Validators.required),
		dateTo: new FormControl(this.today),
		company: new FormControl("", Validators.required),
		jobTitle: new FormControl("", Validators.required),
		location: new FormControl(""),
		user: new FormControl(parseInt(localStorage.getItem("user_id"), 10), Validators.required)
	});

	/**
	 * on init
	 * We are refreshing the JWT token and listing for changes.
	 */
	ngOnInit() {
		this.auth.refreshToken().subscribe(nothing => {
			this.onChanges();
		});
	}

	/**
	 * Listing for changes that the user is doing to the form.
	 * This ensures we always have up to date data.
	 * As every keystroke updates the object
	 */
	private onChanges() {
		this.addForm.valueChanges.subscribe(val => {
			this.updatedForm = val;
		});
		this.addForm.get("current").valueChanges.subscribe(val => {
			this.current = !this.current;
		});
	}

	/**
	 * Posting the new data from the user
	 * It takes the updated form that the user has provided
	 */
	public addExperience() {
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
