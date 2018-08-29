import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";

// new import
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";
import { AuthService } from "../auth/auth.service";
import { NotificationsService } from "angular2-notifications";
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from "../../../../environments/environment";

@Injectable({
	providedIn: "root"
})
export class FakeService {
	API_URL: string = environment.api_url;
	fakeUsers: string = environment.fake_users;
	constructor(private http: HttpClient, private auth: AuthService, private spinner: NgxSpinnerService) {}

	getFakeUsers() {
		return this.http
			.get("/assets/" + this.fakeUsers)
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				this.auth.refreshToken();
				this.spinner.hide();
				return throwError(error);
			});
	}
	getRealUsers() {
		return this.http
			.get(this.API_URL + "/api/users/")
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				this.auth.refreshToken();
				this.spinner.hide();
				return throwError(error);
			});
	}
}
