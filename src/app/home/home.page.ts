import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/services/auth/auth.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SignupComponent } from "../shared/components/signup/signup.component";

@Component({
	selector: "app-home",
	templateUrl: "./home.page.html",
	styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
	public loggedIn: boolean;
	constructor(public auth: AuthService, private modalService: NgbModal) {}

	ngOnInit() {}

	openSignUp() {
		const modalRef = this.modalService.open(SignupComponent, {
			centered: true,
			size: "lg"
		});
	}
}
