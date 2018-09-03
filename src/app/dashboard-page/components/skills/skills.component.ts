import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../services/data.service";
import { NotificationsService } from "angular2-notifications";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
	name: string;

  constructor(public activeModal: NgbActiveModal, private dataService: DataService, private notify: NotificationsService) { }

  ngOnInit() {
  }

}
