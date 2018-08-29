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
	public loggedIn: boolean;
	constructor(public auth: AuthService, private modalService: NgbModal) {}

	ngOnInit() {
		this.getUsername();
		if (this.username) {
			this.auth.refreshToken$.subscribe(val => {
				if (val) {
					// val is true, refreshToken has been notified
					this.loggedIn = true;
					this.getUsername();
				}
			});
		}
	}

	getUsername() {
		this.userID = localStorage.getItem("user_id");
		this.username = localStorage.getItem("username");
		this.auth.getUser(this.userID).subscribe(data => {
			localStorage.setItem("username", data.username);
			this.username = data.username;
			this.avatar = data.profile.avatar;
			this.loggedIn = true;
		});
	}

	openLogin() {
		this.modalService.open(LoginComponent, {
			centered: true,
			size: "lg"
		});
	}
	openSignUp() {
		this.modalService.open(SignupComponent, {
			centered: true,
			size: "lg"
		});
	}
}
