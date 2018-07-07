import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";
@Injectable({
  providedIn: "root"
})
export class LandingPageService {

  constructor(private http: HttpClient) { }

  getDataForLandingPage() {
	return this.http
		.get("/assets/landingpage.json")
		.pipe(map((data: any) => data))
		.catch((error: any) => {
			return throwError(error);
		});
}
}
