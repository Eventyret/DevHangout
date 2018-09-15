import { Component, OnInit } from "@angular/core";
import { sampleSize as _sampleSize } from "lodash";
import { FakeService } from "../../../shared/services/api/fake.service";

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.scss"]
})
export class TestimonialsComponent implements OnInit {
	testimonials: any[];

  constructor(private fakeService: FakeService) { }

  ngOnInit() {
	this.getTestimonials();
}

getTestimonials() {
	this.fakeService.getFakeUsers().subscribe(data => {
		this.testimonials = _sampleSize(data, 20);
	});
}
}
