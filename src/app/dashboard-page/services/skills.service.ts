import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";
import { environment } from "../../../environments/environment";

@Injectable({
	providedIn: "root"
})
export class SkillsService {
	constructor(private http: HttpClient) {}
	API_URL: string = environment.api_url;
	userID: string = localStorage.getItem("user_id");
	allSkills:any = environment.skills;

	getAllSkills() {
		return this.http
			.get("/assets/" + this.allSkills)
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}
	getUserSkills() {
		return this.http
			.get(this.API_URL + "/api/users/" + this.userID + "/skills/")
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}
}
