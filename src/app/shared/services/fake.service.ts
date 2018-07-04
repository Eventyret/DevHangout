import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Users } from "../models/users";
import { throwError } from "rxjs";

// new import
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";

@Injectable({
	providedIn: "root"
})
export class FakeService {
	constructor(private http: HttpClient) {}

	getFakeUsers() {
		return this.http
			.get("/assets/fakeusers.json")
			.pipe(map((data: any) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}
}
