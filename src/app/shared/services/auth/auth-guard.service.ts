import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { LoginComponent } from "../../components/login/login.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanActivate {
	public token = localStorage.getItem("token");

	constructor(private router: Router, private authService: AuthService, public jwtHelper: JwtHelperService) {}

	/**
	 * Determines whether a user can access a route.
	 * We are also checking if the user is logged in to update the navbar
	 * If the user is not logged in we will navigate to session-expired
	 * @returns
	 */
	public canActivate() {
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
			this.router.navigate(["/session-expired"]);
			return false;
		}
	}
}
