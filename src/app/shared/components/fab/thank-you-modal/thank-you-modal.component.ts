import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../../dashboard-page/services/data.service";

@Component({
  selector: 'app-thank-you-modal',
  templateUrl: './thank-you-modal.component.html',
  styleUrls: ['./thank-you-modal.component.scss']
})
export class ThankYouModalComponent implements OnInit {
	name:string;
	amount: number;
	token: string;
	id: number;
  constructor(public activeModal: NgbActiveModal, private dataService: DataService) { }

  ngOnInit() {
	  this.updateSupporterStatus();
  }

  updateSupporterStatus() {
	  const data = {
		  donator: true
	  }
	  this.dataService.updateDetails("profile", "1", data).subscribe(results => {
		  console.log(results);
	  }, error => {
		  console.log(error);
	  })
  }

}
