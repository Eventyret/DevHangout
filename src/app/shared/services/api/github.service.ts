import { environment } from "../../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";
import { throwError } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class GithubService {

	private clientID: string = environment.github_client_id;
	private clientSecret: string = environment.github_client_secret;
	private githubUrl: string = environment.githubapi_url;
	private fakeUsers: string = environment.fake_users;


	/**
	 * Creates an instance of github service.
	 * @param http Responsible for making the
	 * http requests from the app to the API
	 */
	constructor(private http: HttpClient) {}


	/**
	 * Contacts the github API to get the users repos
	 * We are also setting this to be sorted as descendant
	 * as the user profiles show last 5 in that order
	 * @param {string} username that the user provided
	 * @returns  The github profile for that user
	 */
	public gitRepo(username: string) {
		return this.http
			.get(
				this.githubUrl +
					"users/" +
					username +
					"/" +
					"repos" +
					"?client_id=" +
					this.clientID +
					"&client_secret=" +
					this.clientSecret +
					"&sort=desc"
			)
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}



	/**
	 *  Used to return the fakeusers data
	 *
	 * @returns An [Array] of all fake users
	 * This also includes their git data
	 *
	 */
	public fakeGitHubRepo() {
		return this.http
			.get("/assets/" + this.fakeUsers)
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}
}
