import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { GithubService } from "../../../shared/services/api/github.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from "../../services/data.service";
import { Profile } from "selenium-webdriver/firefox";
import { NotificationsService } from "angular2-notifications";

@Component({
	selector: "app-edit-profile",
	templateUrl: "./edit-profile.component.html",
	styleUrls: ["./edit-profile.component.scss"]
})
export class EditProfileComponent implements OnInit {
	name: string;
	githubData: any[];
	profile: Profile;
	updatedForm: Profile;
	id: string;

	constructor(public activeModal: NgbActiveModal, public githubService: GithubService, private dataService: DataService, private notify: NotificationsService) {}
	profileForm = new FormGroup({
		id: new FormControl(localStorage.getItem("user_id"), Validators.required),
		firstName: new FormControl("", Validators.required),
		lastName: new FormControl(""),
		avatar: new FormControl(""),
		location: new FormControl(""),
		website: new FormControl(""),
		company: new FormControl(""),
		title: new FormControl(""),
		bio: new FormControl(""),
		twitter: new FormControl(""),
		facebook: new FormControl(""),
		linkedin: new FormControl(""),
		instagram: new FormControl(""),
		youtube: new FormControl(""),
		github: new FormControl("")
	});

	ngOnInit() {
		this.dataService.getDetailed("education", this.id).subscribe(
			(data: Profile) => {
				this.profile = data;
				this.profileForm.patchValue({
				});
				console.log(data);
			},
			error => {
				console.log(error);
			},
			() => {
				this.onChanges();

			}
		);
	}


	getRepo(username) {
		this.githubService.gitRepo(username).subscribe(info => {
			this.githubData = info;
			console.log(this.githubData);
		});
	}
	onChanges() {
		this.profileForm.valueChanges.subscribe(val => {
			this.updatedForm = val;
			console.log(this.updatedForm);
		});
	}
	update() {
		this.dataService.updateDetails("education", this.id, this.updatedForm).subscribe(results => {
			console.log(results);
		}, error => {
			console.log(error)
			this.notify.error("Seems there was an issue ?", error);
		},() => {
			this.notify.success("Education Updated")
			this.activeModal.close();
		})
	}
	}
