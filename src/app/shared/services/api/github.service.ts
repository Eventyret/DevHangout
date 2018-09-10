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
	clientID: string = environment.github_client_id;
	clientSecret: string = environment.github_client_secret;
	githubUrl: string = environment.githubapi_url;
	fakeUsers: string = environment.fake_users;

	constructor(private http: HttpClient) {}

	gitRepo(username) {
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
	fakeGitHubRepo() {
		return this.http
			.get("/assets/" + this.fakeUsers)
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}
}
