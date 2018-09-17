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
	private API_URL: string = environment.api_url;
	private userID: string = localStorage.getItem("user_id");

	/**
	 * Creates an instance of data service.
	 * @param http Angular Service responsible for making HTTP requests.
	 */
	constructor(private http: HttpClient) {}


	/**
	 * Gets a list of all data for the correct component
	 * @param component  This can be Profile, Skills, Education, Experience
	 * @returns  An Array with the data requested
	 */
	public getList(component) {
		return this.http
			.get(this.API_URL + "/api/users/" + this.userID + "/" + component.toLowerCase() + "/")
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}


	/**
	 * Gets detailed list that particular component and ID
	 * @param component This can be Profile, Skills, Education, Experience
	 * @param id This is the ID of the particular component
	 * @returns  The particular Object of that component
	 */
	public getDetailed(component, id) {
		return this.http
			.get(this.API_URL + "/api/users/" + this.userID + "/" + component.toLowerCase() + "/" + id + "/")
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}


	/**
	 * Updates the users request using a patch request
	 * @param component This can be Profile, Skills, Education, Experience
	 * @param id This is the ID of the particular component
	 * @param form This is the form data that the user submitted
	 * and been updated by the component
	 * @returns a new Object with updated data.
	 */
	public updateDetails(component, id, form) {
		return this.http.patch(this.API_URL + "/api/users/" + this.userID + "/" + component.toLowerCase() + "/" + id + "/", form);
	}


	/**
	 * Posts new details to the database.
	 * @param component This can be Profile, Skills, Education, Experience
	 * @param form This is the form data that the user submitted
	 * and been updated by the component
	 * @returns a new Object with the new data submitted
	 */
	public newDetails(component, form) {
		return this.http.post(this.API_URL + "/api/users/" + this.userID + "/" + component.toLowerCase() + "/", form);
	}


	/**
	 * Deletes details
	 * @param component  This can be Profile, Skills, Education, Experience
	 * @param id  This is the ID of the particular component
	 * @returns a response that the data has been deleted.
	 */
	public deleteDetails(component, id) {
		return this.http.delete(this.API_URL + "/api/users/" + this.userID + "/" + component.toLowerCase() + "/" + id + "/");
	}
}
