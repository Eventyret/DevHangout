import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { NgbModal, NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";
@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
	public isCollapsed = true;
	public username: string;
	public userID: string;
	public avatar: string;
	public loggedIn = false;



	/**
	 * Creates an instance of navbar component.
	 * @param auth Checking if the user is logged in
	 * @param modalService Handling opening a new modal
	 */
	constructor(public auth: AuthService, private modalService: NgbModal) {}


	/**
	 * on init we getting the following data from the user
	 * Their userID
	 * Their username
	 * We are also initializing and the service to see if
	 * the user is still logged in.
	 * This will then update the avatar of the user if they are logged in.
	 * @fires refreshToken$
	 * @fires getUsername()
	 */
	ngOnInit() {
		this.userID = localStorage.getItem("user_id");
		this.username = localStorage.getItem("username");
		this.auth.refreshToken$.subscribe(val => {
			if (val) {
				// val is true, refreshToken has been notified
				this.loggedIn = true;
				this.getUsername();
			}
		});
	}


	/**
	 * Gets the users username
	 * we are also storing their avatar and set their login to true.
	 */
	getUsername() {
		this.userID = localStorage.getItem("user_id");
		this.username = localStorage.getItem("username");
		this.auth.getUser(this.userID).subscribe(data => {
			localStorage.setItem("username", data.username);
			this.username = data.username;
			this.avatar = data.profile[0].avatar;
			this.loggedIn = true;
		});
	}


	/**
	 * Opens login Modal
	 */
	openLogin() {
		this.modalService.open(LoginComponent, {
			centered: true,
			size: "lg"
		});
	}


	/**
	 * Opens sign up Modal
	 */
	openSignUp() {
		this.modalService.open(SignupComponent, {
			centered: true,
			size: "lg"
		});
	}
}
