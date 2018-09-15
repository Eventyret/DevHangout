import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService } from "../../services/auth/auth.service";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomValidators } from "ng5-validation";
import { LoginComponent } from "../login/login.component";
import { User } from "../../models/users.model";

@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
	/**
	 * Signup form of signup component
	 */
	public signupForm: FormGroup;

	/**
	 * Confirm Password
	 */
	public cpassword: string;

	/**
	 * Creates an instance of signup component.
	 * This also generates the form ready with validation.
	 * The validation used is a custom validators to check if the passwords are the same.
	 * @param authService The Auth Service used to post userdata to the backend
	 * @param activeModal  The instance of our modal
	 * @param modalService   A new modal
	 *
	 */
	constructor(private authService: AuthService, public activeModal: NgbActiveModal, private modalService: NgbModal) {
		const password = new FormControl("", Validators.required);
		const cpassword = new FormControl("", [Validators.required, CustomValidators.equalTo(password)]);
		const email = new FormControl("", [Validators.required, CustomValidators.email]);

		this.signupForm = new FormGroup({
			username: new FormControl("", Validators.required),
			email: email,
			password: password,
			cpassword: cpassword
		});
	}

	ngOnInit() {}

	/**
	 * This will pass the form data from the user
	 * to the backend.
	 * If we get a response we will open the
	 * LoginComponent and let the user login.
	 * @param user
	 * @fires LoginComponent on successfull registration
	 */
	register(user: User) {
		this.authService.register(user).subscribe(results => {
			if (results) {
				this.modalService.open(LoginComponent, {
					centered: true,
					size: "lg"
				});
				this.activeModal.dismiss();
			}
		});
	}
}
