import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AddEducationComponent } from "./profile/education/add/add.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open() {
	const modalRef = this.modalService.open(AddEducationComponent);
}
}
