import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NotificationsService } from "angular2-notifications";
import { NgxSpinnerService } from "ngx-spinner";
import { Element as StripeElement, Elements, ElementsOptions, StripeService } from "ngx-stripe";
import { ThankYouModalComponent } from "../thank-you-modal/thank-you-modal.component";
import { SharedService } from "../../../services/misc/shared.service";

@Component({
	selector: "app-supporter-modal",
	templateUrl: "./supporter-modal.component.html",
	styleUrls: ["./supporter-modal.component.scss"]
})
export class SupporterModalComponent implements OnInit {

	public elements: Elements;
	private card: StripeElement;
	public stripeForm: FormGroup;

	/** Set the locale from stripe for the injected script.
	 * This is et to auto as we have world wide users.
	 */
	private elementsOptions: ElementsOptions = {
		locale: "auto"
	};
	public payInProgress = false;
	private  amount: number;
	public name: string;
	public cardName: string;


	/**
	 * Creates an instance of supporter modal component.
	 * @param activeModal The instance of this modal
	 * @param fb The Form that is used in the markup
	 * @param stripeService  Stripe has their own service for Anguar
	 * We are using this to send and recieve data instead of use a http service.
	 * @param spinner The loading spinner that gets shown when the user submits the form
	 * @param notify NotificationsService that is used to show the toast message to the user
	 * on success or error.
	 * @param modalService This is the service that makes us able to open another modal
	 * on completion. As we are redirecting the user to a Thank you Modal.
	 * @param sharedService Passing data with the username or anonymous to the other modals
	 */
	constructor(
		public activeModal: NgbActiveModal,
		private fb: FormBuilder,
		private stripeService: StripeService,
		private spinner: NgxSpinnerService,
		private notify: NotificationsService,
		private modalService: NgbModal,
		private sharedService: SharedService
	) {}

/**
 * We are instantiating the component
 * and building the form for use.
 * We are also injecting the stripe Service to show
 * the element.
 * We are mounting this to #card-element
 */
ngOnInit() {

		this.stripeForm = this.fb.group({
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


	/**
	 * This will take the data from the form then pass the data to stripe.
	 * Stripe will then respond with a token that we can create a charge with.
	 * This is set to developer mode for now and does not actully charge the card.
	 *  If you wanted to do that make another function and use createCharge
	 * More info can be found at https://stripe.com/docs/charges
	 * @param event The form data
	 * @fires openThankYou
	 */
	buy(event) {
		this.spinner.show();
		this.payInProgress = true;
		this.cardName = this.stripeForm.get("cardName").value;
		this.amount = this.stripeForm.get("amount").value;
		this.stripeService.createToken(this.card, { name }).subscribe(results => {
			if (results.token) {
				this.notify.success("Thank you " + this.cardName + "!");
				this.activeModal.dismiss();
				this.openThankYou(results);
			} else if (results.error) {
				console.log(results.error.message);
				this.notify.error("Hey " + this.name, results.error.message);
				this.spinner.hide();
			}
		});
	}



	/**
	 * Opens Thank You Modal.
	 * If the donation was successfull we will open the thank you modal
	 * @param results The data from stripe on success
	 */
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
