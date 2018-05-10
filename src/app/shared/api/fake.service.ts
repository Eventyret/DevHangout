import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Users } from "./users";

// new import
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class FakeService {
	constructor(private http: HttpClient) {}

	getFakeUsers() {
		return this.http.get("/assets/fakeusers.json").pipe(map(users => <User[]>users));
	}
}
