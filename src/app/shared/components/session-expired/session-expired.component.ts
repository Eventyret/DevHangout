import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SignupComponent } from "../signup/signup.component";
@Component({
	selector: "app-session-expired",
	templateUrl: "./session-expired.component.html",
	styleUrls: ["./session-expired.component.scss"]
})
export class SessionExpiredComponent implements OnInit {
	invalidLogin: boolean;
	username: string;
	newUser: boolean;
	loginForm = new FormGroup({
		username: new FormControl("", Validators.required),
		password: new FormControl("", Validators.required)
	});

	get usernameField() {
		return this.loginForm.get("username");
	}
	constructor(private router: Router, private authService: AuthService, public activeModal: NgbActiveModal, private modalService: NgbModal) {}

	ngOnInit() {
		this.username = localStorage.getItem("username");
		if (!localStorage.getItem("username")) {
			this.newUser = true;
		} else {
			this.newUser = false;
		}
	}

	signIn(credentials) {
		this.authService.login(credentials).subscribe(results => {
			if (results) {
				this.router.navigate(["/"]);
				this.activeModal.dismiss();
			} else {
				this.invalidLogin = true;
			}
		});
	}
	dismiss() {
		this.authService.sessionExpired();
		this.activeModal.dismiss();
	}
	register() {
		this.activeModal.dismiss();
		this.modalService.open(SignupComponent, {
			centered: true,
			size: "lg",
			backdrop: "static"
		});
	}
}
