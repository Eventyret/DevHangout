import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SessionExpiredPage } from "./expired-page";

describe("SessionExpiredPageComponent", () => {
  let component: SessionExpiredPage;
  let fixture: ComponentFixture<SessionExpiredPage>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ SessionExpiredPage ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(SessionExpiredPage);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
