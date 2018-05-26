import { AbstractControl } from "@angular/forms";
export class PasswordValidation {
	static MatchPassword(AC: AbstractControl) {
		const password = AC.get("password").value;
		if (AC.get("verifyPassword").touched || AC.get("verifyPassword").dirty) {
			const verifyPassword = AC.get("verifyPassword").value;

			if (password !== verifyPassword) {
				AC.get("verifyPassword").setErrors({ MatchPassword: true });
			} else {
				return null;
			}
		}
	}
}
