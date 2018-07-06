import { TestBed, inject } from "@angular/core/testing";

import { FakeService } from "./fake.service";

describe("FakeService", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [FakeService]
		});
	});

	it(
		"should be created",
		inject([FakeService], (service: FakeService) => {
			expect(service).toBeTruthy();
		})
	);
});
