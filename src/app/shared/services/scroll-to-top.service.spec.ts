import { TestBed, inject } from '@angular/core/testing';

import { ScrollToTopService } from './scroll-to-top.service';

describe('ScrollToTopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollToTopService]
    });
  });

  it('should be created', inject([ScrollToTopService], (service: ScrollToTopService) => {
    expect(service).toBeTruthy();
  }));
});
