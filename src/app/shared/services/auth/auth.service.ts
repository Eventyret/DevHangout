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
import { throwError, BehaviorSubject } from "rxjs";
import "rxjs/add/operator/catch";
import { environment } from "../../../../environments/environment";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	currentUser: any;
	username: string;
	helper = new JwtHelperService();
	private refreshTokenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	refreshToken$ = this.refreshTokenSubject.asObservable();
	API_URL: string = environment.api_url;

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

	/**
	 *
	 * This is to check the connection to heroku, as it can be sleeping.
	 * it will only return a list of all users not used anywhere, but if we get the list we know the server is live and we can proceed.
	 * @memberof AuthService
	 */
	checkConnection() {
		return this.http
			.get(this.API_URL + "/api/users/")
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}

	/**
	 *
	 * This will get the object used for the single user.
	 * @param {*} id This is the user ID for that specific user.
	 * @returns the specific user object
	 * @memberof AuthService
	 */
	getUser(id) {
		return this.http
			.get(this.API_URL + "/api/users/" + id + "/")
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				this.refreshToken();
				this.spinner.hide();
				return throwError(error);
			});
	}

	/**
	 *
	 * This is the login function that will fetch and store the token.
	 * @param {*} credentials is the username and password for that user.
	 * @returns a JWT token
	 * @memberof AuthService
	 */
	login(credentials) {
		localStorage.setItem("username", credentials.username);
		return this.http
			.post<Token>(this.API_URL + "/api/token/", credentials)
			.pipe(
				map(response => {
					const result = response;
					if (result && result.access) {
						localStorage.setItem("token", result.access);
						localStorage.setItem("refresh", result.refresh);
						this.currentUser = this.helper.decodeToken(localStorage.getItem("token"));
						this.setUserID(this.currentUser);
						this.refreshTokenSubject.next(true);
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
		this.username = user.username;
		const data = {
			username: user.username,
			email: user.email,
			password: user.password
		};
		return this.http
			.post<User>(this.API_URL + "/api/register/", data)
			.pipe(
				map(response => {
					const result = response;
					if (result) {
						localStorage.setItem("firstvisit", "true");
						this.spinner.hide();
						this.notify.success("Welcome " + user.username + ". You can now log in");
						return true;
					} else {
						this.spinner.hide();
						return false;
					}
				})
			)
			.catch((error: any) => {
				console.log(error);
				this.spinner.hide();
				return throwError(this.notify.error(error.error.profile) || "Server Error");
			});
	}
	logout() {
		this.router.navigate(["/"]);
		this.notify.info("Your now logged out");
		localStorage.clear()
		this.currentUser = null;
	}
	sessionExpired() {
		this.router.navigate(["/"]);
		this.notify.info("Your session expired, please log back in");
		localStorage.clear()
		this.currentUser = null;
	}

	isLoggedIn() {
		return this.helper.decodeToken(localStorage.getItem("token"));
	}

	refreshToken() {
		const Rtoken = localStorage.getItem("refresh");
		return this.http
			.post<Token>(this.API_URL + "/api/token/refresh/", { refresh: Rtoken })
			.pipe(
				map(response => {
					localStorage.setItem("token", response.access);
					this.refreshTokenSubject.next(true);
				})
			)
			.catch((error: any) => {
				this.refreshToken();
				this.spinner.hide();
				if (error.status === 401) {
					this.sessionExpired();
				} else {
					return throwError(this.notify.error(error.error.non_field_errors) || "Server Error");
				}
			});
	}
}
