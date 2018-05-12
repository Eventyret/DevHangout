import { Component, OnInit } from "@angular/core";
import {NgbModal, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-education",
  templateUrl: "./add-education.component.html",
  styleUrls: ["./add-education.component.scss"]
})
export class AddEducationComponent implements OnInit {
	name;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
