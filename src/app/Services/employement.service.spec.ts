import { TestBed } from '@angular/core/testing';

import { EmployementService } from './employement.service';

describe('EmployementService', () => {
  let service: EmployementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
