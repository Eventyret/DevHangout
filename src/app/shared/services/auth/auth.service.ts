import { User } from "./../../models/users";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";
import { Token } from "../../models/token";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { NotificationsService } from "angular2-notifications";
import { NgxSpinnerService } from "ngx-spinner";
import { throwError } from "rxjs";
import "rxjs/add/operator/catch";

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
		return this.http
			.get("http://localhost:8000/api/users/" + id)
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}
	login(credentials) {
		return this.http
			.post<Token>("http://localhost:8000/api/token/", credentials)
			.pipe(
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
			)
			.catch((error: any) => {
				console.log(error);
				return throwError(this.notify.error(error.error.non_field_errors) || "Server Error");
			});
	}
	setUserID(userToken) {
		localStorage.setItem("user_id", userToken.user_id);
	}
	register(user) {
		this.spinner.show();
		const data = {
			username: user.username,
			email: user.email,
			password: user.password,
			profile: {
				firstName: null,
				lastName: null,
				avatar: null,
				location: null,
				website: null,
				company: null,
				title: null,
				backgroundImage: null,
				bio: null,
				twitter: null,
				facebook: null,
				linkedin: null,
				instagram: null,
				youtube: null,
				github: null,
				donator: false
			}
		};
		return this.http.post<User>("http://localhost:8000/api/register/", data).pipe(
			map(response => {
				const result = response;
				if (result) {
					localStorage.setItem("firstvisit", "true");
					this.spinner.hide();
					this.notify.success("Welcome" + user.username + ". You can now log in");
					return true;
				} else {
					this.spinner.hide();
					return false;
				}
			})
		).catch((error: any) => {
			console.log(error);
			this.spinner.hide();
			return throwError(this.notify.error(error.error.profile) || "Server Error");
		});
	}
	logout() {
		this.router.navigate(["/"]);
		this.notify.info("Your now logged out");
		localStorage.removeItem("token");
		localStorage.removeItem("user_id");
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
		).catch((error: any) => {
			console.log(error);
			return throwError(this.notify.error(error.error.non_field_errors) || "Server Error");
		});
	}
}
