import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";

import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: "app-supporter-modal",
	templateUrl: "./supporter-modal.component.html",
	styleUrls: ["./supporter-modal.component.scss"]
})
export class SupporterModalComponent implements OnInit {
	elements: Elements;
	card: StripeElement;

	// optional parameters
	elementsOptions: ElementsOptions = {
		locale: "auto"
	};

	stripeTest: FormGroup;
	constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private stripeService: StripeService) {}

	ngOnInit() {
		this.stripeTest = this.fb.group({
			name: ["", [Validators.required]]
		});
		this.stripeService.elements(this.elementsOptions).subscribe(elements => {
			this.elements = elements;
			// Only mount the element the first time
			if (!this.card) {
				this.card = this.elements.create("card", {
					style: {
						base: {
							iconColor: "#666EE8",
							color: "#31325F",
							lineHeight: "40px",
							fontWeight: 300,
							fontFamily: "Helvetica Neue, Helvetica, sans-serif",
							fontSize: "18px",
							"::placeholder": {
								color: "#CFD7E0"
							}
						}
					}
				});
				this.card.mount("#card-element");
			}
		});
	}
	buy() {
		const name = this.stripeTest.get("name").value;
		this.stripeService.createToken(this.card, { name }).subscribe(token => {
			if (token) {
				// Use the token to create a charge or a customer
				// https://stripe.com/docs/charges
				console.log(token);
			} else if (Error) {
				// Error creating the token
				console.log(token.error.message);
			}
		});
	}
}
