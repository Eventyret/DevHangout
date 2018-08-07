import { Component, OnInit, Input } from "@angular/core";
import { HomePageService } from "../../service/home-page.service";
import { SignupComponent } from "../../../shared/components/signup/signup.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "../../../shared/services/auth/auth.service";

@Component({
  selector: "app-sections",
  templateUrl: "./sections.component.html",
  styleUrls: ["./sections.component.scss"]
})
export class SectionsComponent implements OnInit {
	Sections: Section;
	constructor(private landingService: HomePageService, private modalService: NgbModal, public auth: AuthService) {}

  ngOnInit() {
	  this.getSections();
  }

  getSections() {
	this.landingService.getDataForLandingPage().subscribe(data => {
		this.Sections = data[0].sections;
	});
}

openSignUp() {
	const modalRef = this.modalService.open(SignupComponent, {
		centered: true,
		size: "lg"
	});
}

}
