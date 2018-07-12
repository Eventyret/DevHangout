import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";

// new import
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";

@Injectable({
	providedIn: "root"
})
export class FakeService {
	fakeUsers: [];
	realUsers: [];
	constructor(private http: HttpClient) {}

	getFakeUsers() {
		return this.http
			.get("/assets/fakeusers.json")
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}
	getRealUsers() {
		return this.http.get("http://localhost:8000/api/users/")
		.pipe(map((data: any) => data))
		.catch((error: any) => {
			return throwError(error);
		});
	}
}
