import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { AuthService } from "./shared/services/auth/auth.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	constructor(private authService: AuthService) {}
	ngOnInit() {}
}
