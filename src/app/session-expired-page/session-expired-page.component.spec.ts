import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SessionExpiredPageComponent } from "./session-expired-page.component";

describe("SessionExpiredPageComponent", () => {
  let component: SessionExpiredPageComponent;
  let fixture: ComponentFixture<SessionExpiredPageComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ SessionExpiredPageComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(SessionExpiredPageComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
