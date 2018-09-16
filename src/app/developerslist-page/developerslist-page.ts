import { Component, OnInit } from "@angular/core";
import { FakeService } from "../shared/services/api/fake.service";
import { NgxSpinnerService } from "ngx-spinner";
import { unionBy as _unionBy, slice as _slice, shuffle as _shuffle, sortBy as _sortBy } from "lodash";
import { AuthService } from "../shared/services/auth/auth.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SessionExpiredComponent } from "../shared/components/session-expired/session-expired.component";

@Component({
	selector: "app-profiles",
	templateUrl: "./developerslist-page.html",
	styleUrls: ["./developerslist-page.scss"]
})
export class DevelopersListComponent implements OnInit {


	public users: any[];
	private fakeUsers: any[];
	private startNum = 0;
	public displayUsers = [];


	/**
	 * Creates an instance of developers list component.
	 * @param fakeService The service that gets the fake users
	 * @param spinner showing the pacman spinner
	 * @param auth sending a refreshToken to the service
	 * to keep the logged in session live
	 * @param modalService If we get an error we open
	 * the session expired modal
	 */
	constructor(
		public fakeService: FakeService,
		private spinner: NgxSpinnerService,
		private auth: AuthService,
		private modalService: NgbModal
	) {}


	/**
	 * on init
	 * Show the spinner
	 * Fetch fake and real developers from database
	 */
	ngOnInit() {
		this.spinner.show();
		this.getDevelopers();
	}



	/**
	 * Gets developers
	 * Gets the fake developers and refreshes the auth token
	 * @fires getRealDevelopers() on data competion
	 */
	getDevelopers() {
		this.spinner.show();
		this.fakeService.getFakeUsers().subscribe(
			data => {
				this.auth.refreshToken().subscribe(val => {
					this.fakeUsers = data;
				});
			},
			error => {
				console.log(error);
			},
			() => {
				this.auth.refreshToken().subscribe(val => {
					this.getRealDevelopers();
				});
			}
		);
	}


	/**
	 * Gets real developers
	 * Grabbing real developers from backend
	 * Then we unionBy get unique users to be displayed and slice them
	 * If we get an error we will show the SessionExpiredComponent
	 * Once completed we hide the spinner
	 * @fires sliaceUsers()
	 */
	getRealDevelopers() {
		this.fakeService.getRealUsers().subscribe(
			data => {
				const realUsers = data;
				this.users = _unionBy(realUsers, this.fakeUsers);
				this.sliceUsers();
			},
			error => {
				this.auth.refreshToken().subscribe(() => {
					this.modalService.open(SessionExpiredComponent, {
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


	/**
	 * Slices users
	 * We take the real users and the fake users.
	 * Slice them into an array of 8 and shuffle them
	 * Each time we run the function we increment it with 8
	 */
	sliceUsers() {
		this.displayUsers.push(... _shuffle(_slice(this.users, this.startNum, this.startNum + 8)));
		this.startNum += 8;
	}


	/**
	 * Loads more
	 * This is used when the user scrolls
	 * We will then just rerun the sliceUsers
	 */
	loadMore() {
		this.sliceUsers();
	}
}
