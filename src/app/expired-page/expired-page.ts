import { Component, OnInit } from "@angular/core";
import { SessionExpiredComponent } from "../shared/components/session-expired/session-expired.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";

@Component({
	selector: "app-expired-page",
	templateUrl: "./expired-page.html",
	styleUrls: ["./expired-page.scss"]
})
export class SessionExpiredPage implements OnInit {



	/**
	 * Creates an instance of session expired page.
	 * @param modalService Opens the modal for Session Expired Component
	 * @param router Used to redirect the user if the close the modal
	 */
	constructor(private modalService: NgbModal, private router: Router) {}


	/**
	 * on init
	 * Due that we would get normally an error
	 * we set a timeout on 300 milliseconds before we auto open the modal

	 */
	ngOnInit() {
		setTimeout(() => {
			this.openModal();
		}, 300);
	}
	openModal() {
		this.modalService.open(SessionExpiredComponent, {
			centered: true,
			size: "lg",
			backdrop: "static",
			beforeDismiss: () => {
				this.router.navigate["/"];
				return true;
			}
		});
	}
}
