import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { AuthService } from "./shared/services/auth/auth.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	public loggedIn: boolean;
	constructor(private auth: AuthService) {}
	ngOnInit() {
		this.auth.refreshToken$.subscribe(val => {
			if (val) {
				// val is true, refreshToken has been notified
				this.loggedIn = true;
			}
		});
	}
}
