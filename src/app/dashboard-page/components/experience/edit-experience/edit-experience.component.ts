import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from "../../../services/data.service";
import { Experience } from "../../../../shared/models/users.model";
import { NotificationsService } from "angular2-notifications";
import { AuthService } from "../../../../shared/services/auth/auth.service";

@Component({
	selector: "app-edit-experience",
	templateUrl: "./edit-experience.component.html",
	styleUrls: ["./edit-experience.component.scss"]
})
export class EditExperienceComponent implements OnInit {
	private id: number;
	public experience: Experience;
	private updatedForm: Experience;
	public current: boolean;
	public user: number;
	private today = new Date().toJSON().slice(0, 10);

	/**
	 * Form holding all the data the user can edit.
	 */
	editForm = new FormGroup({
		current: new FormControl(this.current, Validators.required),
		id: new FormControl(Validators.required),
		dateFrom: new FormControl("", Validators.required),
		dateTo: new FormControl(""),
		jobTitle: new FormControl("", Validators.required),
		location: new FormControl(""),
		company: new FormControl("", Validators.required),
		user: new FormControl("", Validators.required)
	});

		/**
	 * Creates an instance of edit education component.
	 * @param activeModal  Instace of this modal
	 * @param dataService Responsible for the CRUD operations
	 * @param notify Responsible of notifying the user with toast notifications
	 * @param auth Responsible of refreshing the JWT token when user opens this modal
	 */
	constructor(
		public activeModal: NgbActiveModal,
		private dataService: DataService,
		private notify: NotificationsService,
		private auth: AuthService
	) {}

	/**
	 * on init
	 * We refresh the user token to make sure the user is authenticated
	 * We then grab all the data and fill out the form with information
	 * the user already has provided
	 * @fires onChanges()
	 */
	ngOnInit() {
		this.auth.refreshToken().subscribe(nothing => {
			this.dataService.getDetailed("experience", this.id).subscribe(
				(data: Experience) => {
					this.experience = data;
					this.current = data.current;
					this.editForm.patchValue({
						id: data.id,
						user: data.user,
						jobTitle: data.jobTitle,
						company: data.company,
						location: data.location,
						dateFrom: data.dateFrom,
						dateTo: data.dateTo
					});
				},
				error => {
					console.log(error);
				},
				() => {
					this.onChanges();
				}
			);
		});
	}

	/**
	 * Listing for changes that the user is doing to the form.
	 * This ensures we always have up to date data.
	 * As every keystroke updates the object
	 */
	onChanges() {
		this.editForm.valueChanges.subscribe(val => {
			this.updatedForm = val;
		});
		this.editForm.get("current").valueChanges.subscribe(val => {
			this.current = !this.current;
			this.editForm.patchValue({
				dateTo: this.today
			});
		});
	}

	/**
	 * Sends a request to the backend with the user object
	 * Once subscribe  is complete it will notify the user and close the modal
	 * W
	 */
	update() {
		this.dataService.updateDetails("experience", this.id, this.updatedForm).subscribe(
			results => {},
			error => {
				console.log(error);
				this.notify.error(error.message);
			},
			() => {
				this.notify.success("Experience Updated");
				this.activeModal.close();
				this.ngOnInit();
			}
		);
	}
}
