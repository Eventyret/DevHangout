import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
	providedIn: "root"
})
export class ScrollToTopService {


	/**
	 * Creates an instance of scroll to top service.
	 * @param platformId  A token that indicates an opaque platform id.
	 * @param router The Angular router service
	 */
	constructor(
		@Inject(PLATFORM_ID)
		private platformId: Object,
		private router: Router
		) {}


	/**
	 * When a user scrolls further down Angular by default
	 * will stay at the same place on the next page.
	 * We are here setting the page to the top if this is a new component
	 */
	public setScrollTop() {
		if (isPlatformBrowser(this.platformId)) {
			this.router.events.subscribe((event: NavigationEnd) => {
				window.scroll(0, 0);
			});
		}
	}
}
