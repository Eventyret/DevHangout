import { Component, OnInit, Input } from "@angular/core";
import { LandingPageService } from "../../service/landing-page.service";

@Component({
  selector: "app-sections",
  templateUrl: "./sections.component.html",
  styleUrls: ["./sections.component.scss"]
})
export class SectionsComponent implements OnInit {
	Sections: Section;
	constructor(private landingService: LandingPageService) {}

  ngOnInit() {
	  this.getSections();
  }

  getSections() {
	this.landingService.getDataForLandingPage().subscribe(data => {
		this.Sections = data[0].section;
		console.log(data);
	});
}

}
