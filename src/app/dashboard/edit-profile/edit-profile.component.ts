import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { GithubService } from "../../shared/services/api/github.service";

@Component({
	selector: "app-edit-profile",
	templateUrl: "./edit-profile.component.html",
	styleUrls: ["./edit-profile.component.scss"]
})
export class EditProfileComponent implements OnInit {
	name;
	githubData: any[];

	constructor(public activeModal: NgbActiveModal, public githubService: GithubService) {}

	ngOnInit() {}

	getRepo(username) {
		this.githubService.gitRepo(username).subscribe(info => {
			this.githubData = info;
			console.log(this.githubData);
		});
	}
}
