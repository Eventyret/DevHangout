import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "../register/login/login.component";
import { SignupComponent } from "../register/signup/signup.component";
@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
	public isCollapsed = true;
	constructor(public auth: AuthService, private modalService: NgbModal) {
	}

	ngOnInit() {}

	openLogin(event) {
		const modalRef = this.modalService.open(LoginComponent, {
			centered: true,
			size: "lg",
		});
	}
	openSignUp(event) {
		const modalRef = this.modalService.open(SignupComponent, {
			centered: true,
			size: "lg"
		});
	}
}
