import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SharedService {
	donatorName: string;

  constructor() { }

  setDonatorName(name) {
	  this.donatorName = name;
  }
}
