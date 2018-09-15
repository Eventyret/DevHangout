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

	public loading: boolean;

	constructor(private auth: AuthService) {}

	ngOnInit() {
		this.loading = true;
		if (localStorage.getItem("user_id")) {
			this.auth.refreshToken$.subscribe(val => {
				if (val) {
					this.loggedIn = true;
				}
			});
		}
		this.appOnline();
	}


	/**
	 * Heroku will make our backend sleep from time to time.
	 * This is to establish connection to the backend then hide
	 * the loading spinner from the user
	 */
	appOnline() {
		this.auth.checkConnection().subscribe(
			data => {},
			error => {
				this.loading = false;
			},
			() => {
				this.loading = false;
			}
		);
	}
}
