import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsMobileViewComponent } from './donations-mobile-view.component';

describe('DonationsComponent', () => {
  let component: DonationsMobileViewComponent;
  let fixture: ComponentFixture<DonationsMobileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationsMobileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsMobileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
