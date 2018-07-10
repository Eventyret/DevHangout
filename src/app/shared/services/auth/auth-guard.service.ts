import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanActivate {
	token = localStorage.getItem("token");

	constructor(private router: Router, private authService: AuthService, public jwtHelper: JwtHelperService) {}

	canActivate() {
		if (this.token) {
			if (this.jwtHelper.isTokenExpired()) {
				return new Promise<boolean>(resolve => {
					this.authService.refreshToken().subscribe(results => {
						resolve(true);
					});
				});
			} else {
				return true;
			}
		} else {
			this.router.navigate(["/not-found"]);
			return false;
		}
	}
}
