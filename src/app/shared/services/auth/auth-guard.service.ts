import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanActivate {
	token = localStorage.getItem("token");

	constructor(private router: Router, private authService: AuthService, public jwtHelper: JwtHelperService) {}

	/*   canActivate() {
	if (this.authService.isLoggedIn()) {
		return true;
	} else {
		this.router.navigate(["/not-found"]);
		return false;
	}
  } */

	canActivate() {
		if (this.token) {
			if (this.jwtHelper.isTokenExpired()) {
				this.authService.refreshToken().subscribe(results => {
					return true;
				});
			} else {
				return true;
			}
		} else {
			this.router.navigate(["/not-found"]);
		}
	}
}
