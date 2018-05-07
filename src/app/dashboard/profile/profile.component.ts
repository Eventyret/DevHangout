import { Component, OnInit } from "@angular/core";
import {NgbTabsetConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  providers: [NgbTabsetConfig]

})
export class ProfileComponent implements OnInit {
  constructor(config: NgbTabsetConfig) {
	  config.justify = "justified";
	  config.type = "pills";
   }

  ngOnInit() {
  }

}
