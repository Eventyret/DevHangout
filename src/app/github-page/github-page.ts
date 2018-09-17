import { GithubService } from "../shared/services/api/github.service";
import { Component, OnInit } from "@angular/core";
import { sample as _sample } from "lodash";
import { ActivatedRoute } from "@angular/router";
import { Tab } from "../shared/models/users.model";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: "app-fake-github",
	templateUrl: "./github-page.html",
	styleUrls: ["./github-page.scss"]
})
export class FakeGithubPage implements OnInit {

	public username: string;
	public repoName: string;
	private githubData: any[];
	public projects: any;
	private projectsInfo = [];
	public starCount: string;
	public watchCount: string;
	public forkCount: string;
	public tabs: Tab[];



	/**
	 * Creates an instance of fake github page.
	 * @param github The Service that gets data from Github.
	 * If its  a fake user it will get it from fakeusers-env.json Where env is the enviroment.
	 * @param router  Used to get the username and the reponame from the profile visited
	 * @param spinner
	 */
	constructor(private github: GithubService, private router: ActivatedRoute, private spinner: NgxSpinnerService) {}


	/**
	 * On init of the Component
	 * We show the spinner populate the page and get
	 * the username and repo name from the previous page
	 * that was visited
	 */
	ngOnInit() {
		this.spinner.show();
		this.populateSite();
		this.router.params.subscribe(route => {
			this.username = route.username;
			this.repoName = route.repo;
		});
	}


	/**
	 * Populates site
	 * Once we have the data from the init function
	 * We can start get the data from the user and populate the site.
	 * Hides the spinner once data loading is completed
	 */
	populateSite() {
		this.github.fakeGitHubRepo().subscribe(
			data => {
				this.githubData = data;
				this.projectsInfo.push(_sample(data[0].repo));
				this.starCount = this.projectsInfo[0].stargazers_count;
				this.forkCount = this.projectsInfo[0].forks_count;
				this.watchCount = this.projectsInfo[0].watchers_count;
				this.projects = this.projectsInfo[0].project;
				this.tabs = this.projectsInfo[0].tabs;
			},
			error => {
				console.log(error);
			},
			() => {
				this.spinner.hide();
			}
		);
	}
}
