import { GithubService } from "./../shared/services/api/github.service";
import { Component, OnInit } from "@angular/core";
import { sample as _sample } from "lodash";

@Component({
  selector: "app-fake-github",
  templateUrl: "./fake-github.component.html",
  styleUrls: ["./fake-github.component.scss"]
})
export class FakeGithubComponent implements OnInit {

	githubData: any[];
	projects: any;
  constructor(private fakeGithub: GithubService) { }

  ngOnInit() {
	  this.populateSite();
  }

  populateSite() {
	  this.fakeGithub.fakeGitHubRepo().subscribe(data => {
		  this.githubData = data;
		  const tmpCode = data[0].project;
		  this.projects = _sample(tmpCode);
		  
		  console.log(this.githubData);
	  });
  }

}
