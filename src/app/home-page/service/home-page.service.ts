import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";
import { Section } from "../models/home-page.model";

@Injectable({
  providedIn: "root"
})
export class HomePageService {


  /**
   * Creates an instance of home page service.
   * @param http Responsible for making the
   * http requests from the app to the API
   */
  constructor(private http: HttpClient) { }


  /**
   * Gets data for landing page
   * @returns
   */
  public getDataForLandingPage() {
	return this.http
		.get("/assets/landingpage.json")
		.pipe(map((data: Section) => data))
		.catch((error: any) => {
			return throwError(error);
		});
}
}
