import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExperienceMobileViewComponent } from "./experience-mobile-view.component";

describe("ExperienceMobileViewComponent", () => {
  let component: ExperienceMobileViewComponent;
  let fixture: ComponentFixture<ExperienceMobileViewComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ ExperienceMobileViewComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(ExperienceMobileViewComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
