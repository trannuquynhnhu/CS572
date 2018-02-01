import { TestBed, inject } from '@angular/core/testing';

import { CheckUrlValidService } from './check-url-valid.service';

describe('CheckUrlValidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckUrlValidService]
    });
  });

  it('should be created', inject([CheckUrlValidService], (service: CheckUrlValidService) => {
    expect(service).toBeTruthy();
  }));
});
