import { TestBed } from '@angular/core/testing';

import { RadditService } from './raddit.service';

describe('RadditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RadditService = TestBed.get(RadditService);
    expect(service).toBeTruthy();
  });
});
