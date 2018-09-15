import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EducationMobileViewComponent } from "./education-mobile-view.component";

describe("MobileViewComponent", () => {
  let component: EducationMobileViewComponent;
  let fixture: ComponentFixture<EducationMobileViewComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ EducationMobileViewComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(EducationMobileViewComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
