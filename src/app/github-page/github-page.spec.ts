import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FakeGithubPage } from "./github-page";

describe("FakeGithubPage", () => {
  let component: FakeGithubPage;
  let fixture: ComponentFixture<FakeGithubPage>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ FakeGithubPage ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(FakeGithubPage);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
