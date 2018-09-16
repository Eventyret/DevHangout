import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/services/auth/auth.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SignupComponent } from "../shared/components/signup/signup.component";

@Component({
	selector: "app-home",
	templateUrl: "./home-page.html",
	styleUrls: ["./home-page.scss"]
})
export class HomePage implements OnInit {


	/**
	 * Creates an instance of home page.
	 * @param auth Checking if the user is logged in
	 * @param modalService Opens the modal for the Signup Component
	 */
	constructor(public auth: AuthService, private modalService: NgbModal) {}

	ngOnInit() {}



	/**
	 * Opens sign up modal
	 */
	openSignUp() {
		 this.modalService.open(SignupComponent, {
			centered: true,
			size: "lg"
		});
	}
}
