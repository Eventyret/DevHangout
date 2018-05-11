import { ModalComponent } from "./modal/modal.component";
import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-supporter',
  templateUrl: './supporter.component.html',
  styleUrls: ['./supporter.component.scss']
})
export class SupporterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal() {
	  const modalRef = this.modalService.open(ModalComponent, {
		  centered: true,
		  size: "lg"
	  })
  }

}
