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


	/**
	 * Creates an instance of app component.
	 * @param auth Responsible for refreshing the JWT token if a user exists.
	 * @param sharedService Passing the name of Anonymous or the username
	 * This is used in FAB buttons if the user clicks it.
	 */
	constructor(private auth: AuthService, private sharedService: SharedService) {}


	/**
	 * on init
     * We are checking if we have a username in localStorage.
     * if we do we pass it to our shared service. And if we don't we pass in "Anonymous"
	 */
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
