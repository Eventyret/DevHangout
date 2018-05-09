import { Component, OnInit } from "@angular/core";
import {NgbModal, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-delete-account",
  templateUrl: "./delete-account.component.html",
  styleUrls: ["./delete-account.component.scss"]
})
export class DeleteAccountComponent implements OnInit {

	constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
