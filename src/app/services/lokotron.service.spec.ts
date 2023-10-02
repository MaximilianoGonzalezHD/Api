import { TestBed } from '@angular/core/testing';

import { LokotronService } from './lokotron.service';

describe('LokotronService', () => {
  let service: LokotronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LokotronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
