import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth/auth.service";
import { NgbModal, NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "../components/login/login.component";
import { SignupComponent } from "../components/signup/signup.component";
import { Router } from "@angular/router";
@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
	public isCollapsed = true;
	public username: string;
	public userID: string;
	constructor(public auth: AuthService, private modalService: NgbModal, public router: Router) {}

	ngOnInit() {
		this.getUsername();
	}

	getUsername() {
		this.userID = localStorage.getItem("user_id");
		this.auth.getUser(this.userID).subscribe(data => {
			this.username = data.username;
		});
	}

	openLogin(event) {
		const modalRef = this.modalService.open(LoginComponent, {
			centered: true,
			size: "lg"
		});
	}
	openSignUp(event) {
		const modalRef = this.modalService.open(SignupComponent, {
			centered: true,
			size: "lg"
		});
	}
}
