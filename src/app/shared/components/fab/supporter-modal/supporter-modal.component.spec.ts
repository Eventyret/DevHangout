import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SupporterModalComponent } from "./supporter-modal.component";

describe("SupporterModalComponent", () => {
	let component: SupporterModalComponent;
	let fixture: ComponentFixture<SupporterModalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SupporterModalComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SupporterModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
