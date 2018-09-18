import { Component, OnInit } from "@angular/core";
import { sampleSize as _sampleSize } from "lodash";
import { FakeService } from "../../../shared/services/api/fake.service";

@Component({
	selector: "app-testimonials",
	templateUrl: "./testimonials.component.html",
	styleUrls: ["./testimonials.component.scss"]
})
export class TestimonialsComponent implements OnInit {
	public testimonials: any[];

	/**
	 * Creates an instance of testimonials component.
	 * @param fakeService This is the service getting the fake users.
	 */
	constructor(private fakeService: FakeService) {}

	ngOnInit() {
		this.getTestimonials();
	}

	/**
	 * Gets testimonials from the fake users.
	 * Then we generate a new list of 20 on random and display 6 of them
	 */
	private getTestimonials() {
		this.fakeService.getFakeUsers().subscribe(data => {
			this.testimonials = _sampleSize(data, 20);
			console.log(this.testimonials);
		});
	}
}
