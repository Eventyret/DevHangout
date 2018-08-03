import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-session-expired",
  templateUrl: "./session-expired.component.html",
  styleUrls: ["./session-expired.component.scss"]
})
export class SessionExpiredComponent implements OnInit {
	invalidLogin: boolean;
	username: string;
	loginForm = new FormGroup({
		username: new FormControl("", Validators.required),
		password: new FormControl("", Validators.required)
	});

	get usernameField() {
		return this.loginForm.get("username");
	}
	constructor(private router: Router, private authService: AuthService, public activeModal: NgbActiveModal) {	}

	ngOnInit() {
		this.username = localStorage.getItem("username");
	}

	signIn(credentials) {
		this.authService.login(credentials).subscribe(
			results => {
				if (results) {
					this.router.navigate(["/"]);
					this.activeModal.dismiss();
				} else {
					this.invalidLogin = true;
				}
			});
	}

}
