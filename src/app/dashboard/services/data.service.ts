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

	getExperienceList() {
		return this.http
			.get(this.API_URL + "/api/users/" + this.userID + "/experience/")
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}

	getDetailedExperience(expID) {
		return this.http
			.get(this.API_URL + "/api/users/" + this.userID + "/experience/" + expID)
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}
}
