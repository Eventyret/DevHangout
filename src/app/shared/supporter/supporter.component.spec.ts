import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupporterComponent } from './supporter.component';

describe('SupporterComponent', () => {
  let component: SupporterComponent;
  let fixture: ComponentFixture<SupporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
