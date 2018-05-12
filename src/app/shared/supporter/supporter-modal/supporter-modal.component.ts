import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NotificationsService } from "angular2-notifications";
import { NgxSpinnerService } from "ngx-spinner";
import { Element as StripeElement, Elements, ElementsOptions, StripeService } from "ngx-stripe";

@Component({
	selector: "app-supporter-modal",
	templateUrl: "./supporter-modal.component.html",
	styleUrls: ["./supporter-modal.component.scss"]
})
export class SupporterModalComponent implements OnInit {
	elements: Elements;
	card: StripeElement;
	stripeTest: FormGroup;
	elementsOptions: ElementsOptions = {
		locale: "auto"
	};
	payInProgress = false;
	errorMsg: string;
	name: string;

	constructor(
		public activeModal: NgbActiveModal,
		private fb: FormBuilder,
		private stripeService: StripeService,
		private spinner: NgxSpinnerService,
		private notify: NotificationsService
	) {}

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
							iconColor: "#ff0000",
							color: "#31325F",
							lineHeight: "40px",
							fontWeight: 400,
							fontFamily: "Roboto",
							fontSize: "18px",
							"::placeholder": {
								color: "#212121"
							}
						}
					}
				});
				this.card.mount("#card-element");
			}
		});
	}

	buy() {
		this.spinner.show();
		this.payInProgress = true;
		this.name = this.stripeTest.get("name").value;
		this.stripeService.createToken(this.card, { name }).subscribe(results => {
			if (results.token) {
				console.log(results);
				this.notify.success("Thank you " + this.name + "!", results.token.id);
				this.activeModal.dismiss();
				this.spinner.hide();
				// Use the token to create a charge or a customer
				// https://stripe.com/docs/charges
			} else if (results.error) {
				console.log(results.error.message);
				const errorMsg = results.error.message;
				this.notify.error("Seems there was an issue ?" + this.name, errorMsg);
				this.spinner.hide();
			}
		});
	}
}
