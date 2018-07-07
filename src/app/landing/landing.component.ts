import { Component, OnInit } from "@angular/core";
import { FakeService } from "../shared/services/api/fake.service";
import { sampleSize as _sampleSize } from "lodash";

@Component({
	selector: "app-landing",
	templateUrl: "./landing.component.html",
	styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
	testimonials: any[];
	constructor(private fakeService: FakeService) {}

	ngOnInit() {
		this.getTestimonials();
	}

	getTestimonials() {
		this.fakeService.getFakeUsers().subscribe(data => {
			this.testimonials = _sampleSize(data, 20);
		});
	}
}
