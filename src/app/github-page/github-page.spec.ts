import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FakeGithubComponent } from "./fake-github.component";

describe("FakeGithubComponent", () => {
  let component: FakeGithubComponent;
  let fixture: ComponentFixture<FakeGithubComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ FakeGithubComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(FakeGithubComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
