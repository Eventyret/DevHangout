import { Component, OnInit } from "@angular/core";
import {NgbTooltipConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  providers: [NgbTooltipConfig]

})
export class ProfileComponent implements OnInit {
  constructor(config: NgbTooltipConfig, ) {
	config.placement = "top";
	config.triggers = "hover";
   }
   support = true;

  ngOnInit() {
  }

  supporterTest() {
	  this.support = !this.support;
  }

}
