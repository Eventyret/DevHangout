import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../services/data.service";
import { NotificationsService } from "angular2-notifications";
import { SkillsService } from "../../services/skills.service";
import { Skill } from "../../../shared/models/users";
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
		this.skillsService.getUserSkills().subscribe(
			skills => {
				this.userSkills = skills;
				this.mergeSkills(skills);
			},
			error => {
				console.log(error);
			},
			() => {
			}
		);
	}

	mergeSkills(data) {
	}
}
