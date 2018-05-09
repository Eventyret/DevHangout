import { AddEducationComponent } from "./education/add-education/add-education.component";
import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
	username: string = "Simen"

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openEdu() {
	const modalRef = this.modalService.open(AddEducationComponent, {
		centered: true,
		size: "lg",
		backdropClass: "light-blue-backdrop"
	});
	modalRef.componentInstance.name = this.username;
}
}
