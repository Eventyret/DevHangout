import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	currentUser: any;

	constructor(private http: Http, public jwtHelper: JwtHelperService) {
		const token = localStorage.getItem("access");
		if (token) {
			const jwt = new JwtHelperService();
			this.currentUser = jwt.decodeToken(token);
		}
	}
	login(credentials) {
		return this.http.post("http://localhost:8000/api/token", JSON.stringify(credentials)).pipe(
			map(response => {
				const result = response.json();

				if (result && result.token) {
					localStorage.setItem("token", result.token);

					const jwt = new JwtHelperService();
					this.currentUser = jwt.decodeToken(localStorage.getItem("token"));

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
		const jwt = new JwtHelperService();
		return jwt.isTokenExpired("token");
	}
}
