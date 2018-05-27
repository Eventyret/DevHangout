import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class GithubService {
	clientID: string = environment.github_client_id;
	clientSecret: string = environment.github_client_secret;
	githubUrl = "https://api.github.com/";

	constructor(private http: HttpClient) {}

	gitRepo(username) {
		return this.http
			.get(this.githubUrl + username + "/" + "repos")
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return Observable.throw(error);
			});
	}
}
