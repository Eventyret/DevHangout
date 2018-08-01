import { GithubService } from "./../shared/services/api/github.service";
import { Component, OnInit } from "@angular/core";
import { sample as _sample } from "lodash";
import { ActivatedRoute } from "@angular/router";
import { Tab } from "../shared/models/users";

@Component({
  selector: "app-fake-github",
  templateUrl: "./fake-github.component.html",
  styleUrls: ["./fake-github.component.scss"]
})
export class FakeGithubComponent implements OnInit {

	githubData: any[];
	projects: any;
	projectsInfo = [];
	username: string;
	repoName: string;
	starCount: string;
	watchCount: string;
	forkCount: string;
	tabs:  Tab[];
  constructor(private fakeGithub: GithubService, private router: ActivatedRoute) { }

  ngOnInit() {
	  this.populateSite();
	  this.router.params.subscribe(route => {
		  this.username = route.username;
		  this.repoName = route.repo;
	  });
  }

  populateSite() {
	  this.fakeGithub.fakeGitHubRepo().subscribe(data => {
		  this.githubData = data;
		  this.projectsInfo.push( _sample(data[0].repo));
		  this.starCount = this.projectsInfo[0].stargazers_count;
		  this.forkCount = this.projectsInfo[0].forks_count;
		  this.watchCount = this.projectsInfo[0].watchers_count;
		  this.projects = this.projectsInfo[0].project;
		  this.tabs = this.projectsInfo[0].tabs;
	  });
  }

}
