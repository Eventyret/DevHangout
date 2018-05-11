import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Users } from "./users";

// new import
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class FakeService {
	constructor(private http: HttpClient) {}

	getFakeUsers() {
		return this.http.get("/assets/fakeusers.json").pipe(map((data:any) => data)).catch((error:any) => { return Observable.throw(error)})
	}
}
