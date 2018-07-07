import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DividersComponent } from "./dividers.component";

describe("DividersComponent", () => {
  let component: DividersComponent;
  let fixture: ComponentFixture<DividersComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ DividersComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(DividersComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
