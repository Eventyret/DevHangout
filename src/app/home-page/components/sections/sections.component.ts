import { Component, OnInit, Input } from "@angular/core";
import { HomePageService } from "../../service/home-page.service";
import { SignupComponent } from "../../../shared/components/signup/signup.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "../../../shared/services/auth/auth.service";
import { Section } from "../../models/home-page.model";

@Component({
  selector: "app-sections",
  templateUrl: "./sections.component.html",
  styleUrls: ["./sections.component.scss"]
})
export class SectionsComponent implements OnInit {

	public Sections: Section;


	/**
	 * Creates an instance of sections component.
	 * @param landingService  Responsible for handling content from
	 * @param modalService The Instance of this Modal
	 * @param auth Injected to check if the user is logged in.
	 */
	constructor(private landingService: HomePageService, private modalService: NgbModal, public auth: AuthService) {}

  ngOnInit() {
	  this.getSections();
  }


  /**
   * Gets the sections that are displayed on the front page.
   */
  private getSections() {
	this.landingService.getDataForLandingPage().subscribe(data => {
		this.Sections = data[0].sections;
	});
}


/**
 * Opens the signup modal once a user clicks on a singup button
 */

public openSignUp() {
	this.modalService.open(SignupComponent, {
		centered: true,
		size: "lg"
	});
}

}
