import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../services/data.service";
import { NotificationsService } from "angular2-notifications";
import { SkillsService } from "../../services/skills.service";
import { Skill } from "../../../shared/models/users.model";
import { merge as _merge, filter as _filter } from "lodash";

@Component({
	selector: "app-skills",
	templateUrl: "./skills.component.html",
	styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
	name: string;
	id: number;
	allSkills: Skill;
	userSkills: Skill;
	combinedSkilles: any;
	ownedSkills: boolean;

	constructor(
		public activeModal: NgbActiveModal,
		private skillsService: SkillsService,
		private notify: NotificationsService,
		private dataService: DataService
	) {}

	ngOnInit() {
		this.getAllSkills();
	}
	getAllSkills() {
		this.skillsService.getAllSkills().subscribe(
			skills => {
				this.allSkills = skills;
			},
			error => {
				console.log(error);
			},
			() => {
				this.getUserSkills();
			}
		);
	}
	getUserSkills() {
		this.id = JSON.parse(localStorage.getItem("user_id"));
		this.skillsService.getUserSkills().subscribe(
			skills => {
				this.userSkills = skills;
			},
			error => {
				console.log(error);
			},
			() => {}
		);
	}

	updateSkill(data: Skill) {
		const userSkill = {
			user: this.id,
			name: data.name,
			icon: data.icon,
			owned: true
		};
		this.skillsService.newUserSkill(userSkill).subscribe(
			result => {
				this.userSkills = result;
			},
			error => {
				console.log(error);
			},
			() => {}
		);
	}
}