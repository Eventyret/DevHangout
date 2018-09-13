import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NotificationsService } from "angular2-notifications";
import { SkillsService } from "../../services/skills.service";
import { Skill } from "../../../shared/models/users.model";
import { find as _find } from "lodash";
import { DataService } from "../../services/data.service";

@Component({
	selector: "app-skills",
	templateUrl: "./skills.component.html",
	styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
	name: string;
	id: number;
	allSkills: any;
	userSkills: any;

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

	addSkill(data: Skill) {
		if (data.user === 0) {
			const newSkill: Skill = {
				user: this.id,
				skillID: data.skillID,
				name: data.name,
				icon: data.icon,
				owned: true
			};
			this.checkIfUserHasSkill(newSkill);
		}
	}
	deleteSkill(name, id) {
		this.dataService.deleteDetails("skills", id).subscribe(
			results => {},
			error => {
				console.log(error);
				this.notify.error(error);
			},
			() => {
				this.getAllSkills();
				this.notify.info("You removed " + name + " from your skills 👋");
			}
		);
	}

	checkIfUserHasSkill(skill) {
		const existingSkill = _find(this.userSkills, function(o) {
			return o.skillID == skill.skillID;
		});
		if (!existingSkill) {
			this.dataService.newDetails("skills", skill).subscribe(
				results => {},
				error => {
					console.log(error);
					this.notify.error(error.message);
				},
				() => {
					this.getAllSkills();
					this.notify.success(skill.name + " has been added to your skills 👍");
				}
			);
		} else {
			this.notify.error("You already have " + skill.name + " as a skill 🤨");
			return;
		}
	}
}
