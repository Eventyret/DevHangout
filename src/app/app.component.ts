import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { AuthService } from "./shared/services/auth/auth.service";
import { SharedService } from "./shared/services/misc/shared.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	public loggedIn: boolean;
	private name: string;
	public loading: boolean;

	constructor(private auth: AuthService, private sharedService: SharedService) {}

	ngOnInit() {
		this.loading = true;
		if (localStorage.getItem("user_id")) {
			this.auth.refreshToken$.subscribe(val => {
				if (val) {
					this.loggedIn = true;
				}
			});
		}
		if (!localStorage.getItem("username") || !this.name) {
			this.loggedIn = false;
			this.name = "Anonymous";
		} else {
			this.loggedIn = true;
			this.name = localStorage.getItem("username");
		}
		this.sharedService.setDonatorName(this.name);
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
