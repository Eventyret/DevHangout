import { Component, OnInit } from "@angular/core";
import { FakeService } from "../shared/services/api/fake.service";
import { NgxSpinnerService } from "ngx-spinner";
import { unionBy as _unionBy, slice as _slice, shuffle as _shuffle } from "lodash";
import { AuthService } from "../shared/services/auth/auth.service";
import { Router, Routes } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SessionExpiredComponent } from "../shared/components/session-expired/session-expired.component";
@Component({
	selector: "app-profiles",
	templateUrl: "./profiles.component.html",
	styleUrls: ["./profiles.component.scss"]
})
export class ProfilesComponent implements OnInit {
	users: any[];
	fakeUsers: any[];
	skills: any[];
	term: string;
	startNum = 0;
	displayUsers = [];
	url: string;

	constructor(
		public fakeService: FakeService,
		private spinner: NgxSpinnerService,
		private auth: AuthService,
		private router: Router,
		private modalService: NgbModal
	) {
		this.url = this.router.url;
	}

	ngOnInit() {
		this.spinner.show();
		this.getDevelopers();
	}
	sliceUsers() {
		this.displayUsers.push(..._slice(this.users, this.startNum, this.startNum + 8));
		this.startNum += 8;
	}

	loadMore() {
		this.sliceUsers();
	}

	getDevelopers() {
		this.spinner.show();
		this.fakeService.getFakeUsers().subscribe(
			data => {
				this.fakeUsers = data;
			},
			error => {
				console.log(error);
			},
			() => {
				this.getRealDevelopers();
			}
		);
	}

	getRealDevelopers() {
		this.fakeService.getRealUsers().subscribe(
			data => {
				const realUsers = data;
				this.users = _shuffle(_unionBy(realUsers, this.fakeUsers));
				this.sliceUsers();
			},
			error => {
				this.auth.refreshToken().subscribe(() => {
					const modalRef = this.modalService.open(SessionExpiredComponent, {
						centered: true,
						size: "lg",
						backdrop: "static",
						backdropClass: "backdrop-color"
					});
				});
			},
			() => {
				this.spinner.hide();
			}
		);
	}
}
