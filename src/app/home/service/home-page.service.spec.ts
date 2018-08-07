import { TestBed, inject } from "@angular/core/testing";

import { HomePageService } from "./home-page.service";

describe("LandingPageService", () => {
  beforeEach(() => {
	TestBed.configureTestingModule({
		providers: [HomePageService]
	});
  });

  it("should be created", inject([HomePageService], (service: HomePageService) => {
	expect(service).toBeTruthy();
  }));
});
