import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";
import { environment } from "../../../environments/environment";

@Injectable({
	providedIn: "root"
})
export class DataService {
	API_URL: string = environment.api_url;
	userID: string = localStorage.getItem("user_id");

	constructor(private http: HttpClient) {}

	getList(component) {
		return this.http
			.get(this.API_URL + "/api/users/" + this.userID + "/" + component + "/")
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}

	getDetailed(component, id) {
		return this.http
			.get(this.API_URL + "/api/users/" + this.userID + "/" + component + "/" + id + "/")
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}
	updateDetails(component, id, form) {
		return this.http.patch(this.API_URL + "/api/users/" + this.userID + "/" + component + "/" + id + "/", form);
	}
}
