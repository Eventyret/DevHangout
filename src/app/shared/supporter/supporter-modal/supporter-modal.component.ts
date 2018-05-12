import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NotificationsService } from "angular2-notifications";

@Component({
	selector: "app-supporter-modal",
	templateUrl: "./supporter-modal.component.html",
	styleUrls: ["./supporter-modal.component.scss"]
})
export class SupporterModalComponent implements OnInit {
	elements: Elements;
	card: StripeElement;
	payInProgress = false;
	payError = false;
	payComplete = false;
	successMsg;
	errorMsg: string;
	name: string;
	elementsOptions: ElementsOptions = {
		locale: "auto"
	};

	stripeTest: FormGroup;

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
							fontWeight: 300,
							fontFamily: "Ubuntu",
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
				this.payComplete = true;
				this.successMsg = results.token.id;
				this.spinner.hide();
				// Use the token to create a charge or a customer
				// https://stripe.com/docs/charges
			} else if (results.error) {
				console.log(results.error.message);
				this.payError = true;
				this.errorMsg = results.error.message;
				this.notify.error(this.errorMsg);
				this.spinner.hide();
			}
		});
	}
}
