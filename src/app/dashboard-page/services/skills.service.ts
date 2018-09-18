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

	private API_URL: string = environment.api_url;
	private userID: string = localStorage.getItem("user_id");
	private allSkills: any = environment.skills;


	/**
	 * Creates an instance of skills service.
	 * @param http  The Angular Serivce responsible for HTTP Requests
	 */
	constructor(private http: HttpClient) {}


	/**
	 * Gets all skills from the generic skills list
	 * @returns  an Array of all the generic skills
	 * for the user to pick from
	 */
	public getAllSkills() {
		return this.http
			.get("/assets/" + this.allSkills)
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}

	/**
	 * Gets user skills
	 * Will get the users logged in specific skills
	 * from the database
	 * @returns Array of objects that holds all the users current skills
	 * in the database.
	 */
	public getUserSkills() {
		return this.http
			.get(this.API_URL + "/api/users/" + this.userID + "/skills/")
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}
}
