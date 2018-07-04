import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";
import { Token } from "../models/token";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	currentUser: any;
	helper = new JwtHelperService();

	constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {
		const token = localStorage.getItem("access");
		if (token) {
			this.currentUser = this.helper.decodeToken(token);
		}
	}
	login(credentials) {
		return this.http.post<Token>("http://localhost:8000/api/token/", credentials).pipe(
			map(response => {
				const result = response;

				if (result && result.access) {
					localStorage.setItem("token", result.access);

					this.currentUser = this.helper.decodeToken(localStorage.getItem("token"));

					return true;
				} else {
					return false;
				}
			})
		);
	}
	logout() {
		localStorage.removeItem("token");
		this.currentUser = null;
	}

	isLoggedIn() {
		return this.helper.isTokenExpired("token");
	}
}
