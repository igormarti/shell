import { TestBed } from '@angular/core/testing';

import { ErrorHandlingServiceService } from './error-handling-service.service';

describe('ErrorHandlingServiceService', () => {
  let service: ErrorHandlingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandlingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
