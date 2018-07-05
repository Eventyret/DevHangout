import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "../../../../../node_modules/@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
	invalidLogin: boolean;
	loginForm = new FormGroup({
		username: new FormControl("", Validators.required),
		password: new FormControl("", Validators.required)
	});

	get usernameField() {
		return this.loginForm.get("username");
	}
	constructor(private router: Router, private authService: AuthService, public activeModal: NgbActiveModal) {}

	ngOnInit() {}

	signIn(credentials) {
		this.authService.login(credentials)
		.subscribe(results => {
			if (results) {
				this.router.navigate(["/dashboard"]);
			} else {
				this.invalidLogin = true;
			}
		});
	}
}
