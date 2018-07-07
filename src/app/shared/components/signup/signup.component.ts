import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService } from "../../services/auth/auth.service";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomValidators } from "ng5-validation";
import { LoginComponent } from "../login/login.component";

@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
	signupForm: FormGroup;
	cpassword: string;
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
	get usernameField() {
		return this.signupForm.get("username");
	}
	get emailField() {
		return this.signupForm.get("email");
	}
	get passwordField() {
		return this.signupForm.get("password");
	}
	get cpasswordField() {
		return this.signupForm.get("cpassword");
	}
	register(user) {
		this.authService.register(user).subscribe(results => {
			if (results) {
				this.activeModal.dismiss();
				this.modalService.open(LoginComponent, {
					centered: true,
					size: "lg"
				});
			} else {
			}
		});
	}
	debugSubmit(value) {
		console.log(value);
	}

	ngOnInit() {}
}
