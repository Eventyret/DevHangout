import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NotificationsService } from "angular2-notifications";
import { NgxSpinnerService } from "ngx-spinner";
import { Element as StripeElement, Elements, ElementsOptions, StripeService } from "ngx-stripe";
import { ThankYouModalComponent } from "../thank-you-modal/thank-you-modal.component";
import { SharedService } from "../../../services/shared.service";

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
	amount: number;
	name: string;
	cardName: string;

	constructor(
		public activeModal: NgbActiveModal,
		private fb: FormBuilder,
		private stripeService: StripeService,
		private spinner: NgxSpinnerService,
		private notify: NotificationsService,
		private modalService: NgbModal,
		private sharedService: SharedService
	) {}

	ngOnInit() {
		this.stripeTest = this.fb.group({
			cardName: ["", [Validators.required]],
			amount: ["", [Validators.required]]
		});
		this.stripeService.elements(this.elementsOptions).subscribe(elements => {
			this.elements = elements;
			// Only mount the element the first time
			if (!this.card) {
				this.card = this.elements.create("card", {
					iconStyle: "solid"
				});
				this.card.mount("#card-element");
			}
		});
	}

	buy(event) {
		this.spinner.show();
		this.payInProgress = true;
		this.cardName = this.stripeTest.get("cardName").value;
		this.amount = this.stripeTest.get("amount").value;
		this.stripeService.createToken(this.card, { name }).subscribe(results => {
			if (results.token) {
				this.notify.success("Thank you " + this.cardName + "!");
				this.activeModal.dismiss();
				this.openThankYou(results);
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
	openThankYou(results) {
		this.spinner.hide();
		const modalRef = this.modalService.open(ThankYouModalComponent, {
			centered: true,
			size: "lg",
			backdrop: "static",
			beforeDismiss: () => {
				this.sharedService.setDonatorName(this.name);
				return true;
			}
		});
		modalRef.componentInstance.name = this.cardName;
		modalRef.componentInstance.amount = this.amount;
		modalRef.componentInstance.token = results.token.id;
		modalRef.componentInstance.info = results.token;
		modalRef.componentInstance.date = results.token.created;
		modalRef.componentInstance.card = results.token.card;
		modalRef.componentInstance.id = localStorage.getItem("user_id");
	}
}
