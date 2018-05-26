import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
	public signUpForm: FormGroup;
	public emailRegex = "[^ @]*@[^ @]*";
	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.signUpForm = this.fb.group({
			name: new FormControl("", Validators.required),
			email: new FormControl(null, Validators.compose([Validators.required, Validators.pattern(this.emailRegex)])),
			password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)]))
		});
	}
}dasdas
