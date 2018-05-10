import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Users } from "./users";
import "rxjs/add/operator/map";
@Injectable({
	providedIn: "root"
})
export class FakeService {
	constructor(private http: HttpClient) {}

	getFakeUsers() {
		return this.http.get("/assets/fakeusers.json").map(users => users as Array<Users>);
	}
}
