import { User } from "./../../models/users";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";
import { Token } from "../../models/token";
import { Router } from "@angular/router";
import { NotificationsService } from "angular2-notifications";
import { NgxSpinnerService } from "ngx-spinner";
import { throwError, BehaviorSubject } from "rxjs";
import "rxjs/add/operator/catch";
import { environment } from "../../../../environments/environment";
import { SessionExpiredComponent } from "../../components/session-expired/session-expired.component";

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
		private notify: NotificationsService,
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
	 * @param{id} id This is the user ID for that specific user.
	 * @returns the specific user object
	 * @memberof AuthService
	 */
	getUser(id: any) {
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
	 * @param(credentials) - The username and password of the user
	 * @returns a JWT token
	 * If we have an error we will show the error to the user.
	 * @memberof AuthService
	 */
	login(credentials: any) {
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

	/**
	 *
	 * This sets the UserID into localStorage.
	 * @param(userToken) - The token that the user has
	 * @memberof AuthService
	 */
	setUserID(userToken: any) {
		localStorage.setItem("user_id", userToken.user_id);
	}

	/**
	 *
	 * This is the registration function that will register a user to the backend.
	 * @param(user) The User form that contains the username, password and email for that user.
	 * @returns true or false, and then sets a localStorage variable since this will be their first visit.
	 * @memberof AuthService
	 */
	register(user: User) {
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
						sessionStorage.setItem("firstvisit", "true");
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
				return throwError(this.notify.error("The username already exists") || "Server Error");
			});
	}

	/**
	 *
	 * This will log out the user navigate them to the front page and clear localStorage.
	 * It will also set the currentUser to null as we currently don't have any user at this moment.
	 * @memberof AuthService
	 */
	logout() {
		this.router.navigate(["/"]);
		this.notify.info("Your now logged out");
		localStorage.clear();
		this.currentUser = null;
	}

	/**
	 *
	 * This will navigate the user to the front page, clear the localStorage
	 * This will also set the currentUser to null as we do not have a valid user logge din.
	 * Also sends a notification to the user that their session has expired.
	 * @memberof AuthService
	 */
	sessionExpired() {
		this.router.navigate(["/"]);
		this.notify.info("Your session expired, please log back in");
		localStorage.clear();
		this.currentUser = null;
	}

	/**
	 * This will navigate the user to the front page, clear the localStorage
	 * This will also set the currentUser to null as we do not have a valid user logge din.
	 * Also sends a notification to the user that they need to be logged in.
	 * @memberof AuthService
	 */
	notLoggedIn() {
		this.router.navigate(["/"]);
		this.notify.info("You need to be logged in");
		localStorage.clear();
		this.currentUser = null;
	}

	/**
	 *
	 * Helperfunction to check if user is logged in.
	 * This will then check the localStorage for the token and decode it
	 * @returns a decoded token
	 * @memberof AuthService
	 */
	isLoggedIn() {
		return this.helper.decodeToken(localStorage.getItem("token"));
	}

	/**
	 *
	 *  This will make a post request to the backend with the refresh token.
	 * If this is validated it will store the new token in localStorage.
	 * If it has an error we will hide the loading spinner, try to refresh the token again.
	 * Also perfoming a check if the the status is 401 we know the session is expired as that would be unauhtorized.
	 * While if its 400 we know they are not authenticated at all and will run notLoggedIn()
	 * @returns a token response
	 * @memberof AuthService
	 */
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
				} else if(error.status === 400) {
					this.notLoggedIn()
				}
				else {
					return throwError(this.notify.error(error.error.non_field_errors) || "Server Error");
				}
			});
	}
}
