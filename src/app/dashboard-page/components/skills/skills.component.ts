import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NotificationsService } from "angular2-notifications";
import { SkillsService } from "../../services/skills.service";
import { Skill } from "../../../shared/models/users.model";
import { merge as _merge, filter as _filter } from "lodash";
import { AuthService } from "../../../shared/services/auth/auth.service";
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
	uniqueList: any;
	combinedSkilles: any;
	ownedSkills: boolean;

	constructor(
		public activeModal: NgbActiveModal,
		private skillsService: SkillsService,
		private notify: NotificationsService,
		private authService: AuthService,
		private dataService: DataService
	) {}

	ngOnInit() {
		this.getAllSkills();
	}
	getAllSkills() {
		this.skillsService.getAllSkills().subscribe(
			skills => {
				this.getUserSkills(skills);
			},
			error => {
				console.log(error);
			},
			() => {}
		);
	}
	getUserSkills(allSkills) {
		this.id = JSON.parse(localStorage.getItem("user_id"));
		this.skillsService.getUserSkills().subscribe(
			skills => {
				this.userSkills = skills;
				const tempList = _merge(allSkills, this.userSkills);
				this.allSkills = _filter(tempList, function(o) {
					return !o.id;
				});
				console.log(this.allSkills);
			},
			error => {
				console.log(error);
			},
			() => {}
		);
	}

	updateSkill(data: Skill) {
		if (!data.user) {
			const newSkill: Skill = {
				user: this.id,
				skillID: data.skillID,
				name: data.name,
				icon: data.icon,
				owned: true
			};
			this.dataService.newDetails("skills", newSkill).subscribe(
				results => {},
				error => {
					console.log(error);
					this.notify.alert(error);
				},
				() => {
					this.getAllSkills();
					this.notify.success("Skill has been updated");
				}
			);
		} else {
			const newSkill: Skill = {
				user: this.id,
				skillID: data.skillID,
				name: data.name,
				icon: data.icon,
				owned: data.owned
			};
			this.dataService.updateDetails("skills", this.id, newSkill).subscribe(
				results => {},
				error => {
					console.log(error);
					this.notify.error(error);
				},
				() => {
					this.getAllSkills();
					this.notify.success("Your new skill has been added");
				}
			);
		}
	}
	deleteSkill(id) {
		this.dataService.deleteDetails("skills", id).subscribe(
			results => {},
			error => {
				console.log(error);
			},
			() => {
				this.getAllSkills();
				this.notify.success("Skill removed");
			}
		);
	}
}
