import { TestBed } from '@angular/core/testing';

import { SrvcourseService } from './srvcourse.service';

describe('SrvcourseService', () => {
  let service: SrvcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
