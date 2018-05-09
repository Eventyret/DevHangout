import { Component, OnInit } from "@angular/core";
import {NgbModal, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-experience",
  templateUrl: "./add-experience.component.html",
  styleUrls: ["./add-experience.component.scss"]
})
export class AddExperienceComponent implements OnInit {

	constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
