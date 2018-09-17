import { Component, OnInit, Input } from "@angular/core";
import { Repo } from "../../../shared/models/users.model";

@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  styleUrls: ["./github.component.scss"]
})
export class GithubComponent implements OnInit {


	/**
	 * The input coming from the Parent component
	 * This will contain the github repos for that user.
	 */
	@Input() repos: Repo;

  constructor() { }

  ngOnInit() {
  }

}
