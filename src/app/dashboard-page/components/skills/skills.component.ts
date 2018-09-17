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

	private id: number;
	public allSkills: Skill;
	public userSkills: Skill;


	/**
	 * Creates an instance of skills component.
	 * @param activeModal  The instance of our modal
	 * @param skillsService Getting the array of all generic skills
	 * and also getting all the current users skills
	 * @param notify Giving a toast message for our users
	 * @param dataService CRUD operations for our skills and the current user.
	 */
	constructor(
		public activeModal: NgbActiveModal,
		private skillsService: SkillsService,
		private notify: NotificationsService,
		private dataService: DataService
	) {}


	ngOnInit() {
		this.getAllSkills();
	}


	/**
	 * Gets all generic skills from the pool of skills
	 * @fires getUserSkills()
	 */
	private getAllSkills() {
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


	/**
	 * Gets the current users skills.
	 * Getting the userID from the localstorage
	 */
	private getUserSkills() {
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


	/**
	 * Checks if user has skill
	 * We are checking if the user already having this skill
	 * @param skill Current skill selected
	 * @returns  Array This will either be the Skill Object or undefined
	 * If it comes back undefined we know the user don't have this skill
	 * and we can make a post request.
	 * Else we know the user has the skill, we then just notify the user and don't do anything.
	 */
	private checkIfUserHasSkill(skill) {
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


	/**
	 * Adds skill
	 * @param data  The Skill Object of the current skill selected
	 * @fires checkIfUserHasSkill()
	 */
	public addSkill(data: Skill) {
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


	/**
	 * Deletes skill from the user
	 * @param name The name of the skill
	 * @param id  the ID of the skill
	 */
	public  deleteSkill(name, id) {
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


}
