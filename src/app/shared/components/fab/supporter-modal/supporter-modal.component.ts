import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NotificationsService } from "angular2-notifications";
import { NgxSpinnerService } from "ngx-spinner";
import { Element as StripeElement, Elements, ElementsOptions, StripeService } from "ngx-stripe";
import { AuthService } from "../../../services/auth/auth.service";
import { ThankYouModalComponent } from "../thank-you-modal/thank-you-modal.component";

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
	username: string;
	amount: number;
	name: string;
	cardName: string;

	constructor(
		public activeModal: NgbActiveModal,
		private fb: FormBuilder,
		private stripeService: StripeService,
		private spinner: NgxSpinnerService,
		private notify: NotificationsService,
		private auth: AuthService,
		private modalService: NgbModal
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
				console.log(results);
				console.log(this.amount);
				this.notify.success("Thank you " + this.cardName + "!", results.token.id);
				this.activeModal.dismiss();
				this.spinner.hide();
				this.openThankYou(results.token.id);
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
	openThankYou(token) {
		const modalRef = this.modalService.open(ThankYouModalComponent, {
			centered: true,
			size: "lg",
			backdropClass: "light-blue-backdrop",
			backdrop: "static"
		});
		modalRef.componentInstance.name = this.name;
		modalRef.componentInstance.amount = this.amount;
		modalRef.componentInstance.token = token;
		modalRef.componentInstance.id =localStorage.getItem("user_id");
	}
}
