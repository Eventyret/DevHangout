import { Component, OnInit } from "@angular/core";
import { SessionExpiredComponent } from "../shared/components/session-expired/session-expired.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "../shared/services/auth/auth.service";

@Component({
	selector: "app-expired-page",
	templateUrl: "./expired-page.html",
	styleUrls: ["./expired-page.scss"]
})
export class SessionExpiredPage implements OnInit {
	constructor(public auth: AuthService, private modalService: NgbModal) {}

	ngOnInit() {
		const modalRef = this.modalService.open(SessionExpiredComponent, {
			centered: true,
			size: "lg"
		});
	}
}
