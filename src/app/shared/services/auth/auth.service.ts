import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";
import { Token } from "../../models/token";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { UserRegistration } from "../../models/userRegistration";
import { NotificationsService } from "angular2-notifications";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	currentUser: any;
	helper = new JwtHelperService();

	constructor(
		private http: HttpClient,
		public jwtHelper: JwtHelperService,
		public router: Router,
		private spinner: NgxSpinnerService,
		private notify: NotificationsService
	) {
		const token = localStorage.getItem("access");
		if (token) {
			this.currentUser = this.helper.decodeToken(token);
		}
	}
	getUser(id) {
		return this.http.get("http://localhost:8000/api/users/" + id).pipe(map((data: any) => data));
	}
	login(credentials) {
		return this.http.post<Token>("http://localhost:8000/api/token/", credentials).pipe(
			map(response => {
				const result = response;

				if (result && result.access) {
					localStorage.setItem("token", result.access);
					localStorage.setItem("refresh", result.refresh);
					this.currentUser = this.helper.decodeToken(localStorage.getItem("token"));
					this.setUserID(this.currentUser);
					return true;
				} else {
					return false;
				}
			})
		);
	}
	setUserID(userToken) {
		localStorage.setItem("user_id", userToken.user_id);
	}
	register(user) {
		this.spinner.show();
		const data = {
			username: user.username,
			email: user.email,
			password: user.password
		};
		return this.http.post<UserRegistration>("http://localhost:8000/api/register/", data).pipe(
			map(response => {
				const result = response;
				if (result) {
					localStorage.setItem("firstvisit", "true");
					this.spinner.hide();
					this.notify.success("Welcome" + user.username + ". You can now log in");
					return true;
				} else {
					this.spinner.hide();
					this.notify.error("There was an error please try again");
					return false;
				}
			})
		);
	}
	logout() {
		this.router.navigate(["/"]);
		localStorage.removeItem("token");
		this.currentUser = null;
	}

	isLoggedIn() {
		return this.helper.decodeToken(localStorage.getItem("token"));
	}

	refreshToken() {
		const Rtoken = localStorage.getItem("refresh");
		return this.http.post<Token>("http://localhost:8000/api/token/refresh/", { refresh: Rtoken }).pipe(
			map(response => {
				localStorage.setItem("token", response.access);
			})
		);
	}
}
