import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SharedService {

	public donatorName: string;

  constructor() { }


  /**
   * Sets donator name
   * We are storing this so we can pass
   * this through the modals when we close them
   * @param name
   */
  public setDonatorName(name) {
	  this.donatorName = name;
  }
}
