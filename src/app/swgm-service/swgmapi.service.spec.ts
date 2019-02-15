import { TestBed } from '@angular/core/testing';

import { SwgmapiService } from './swgmapi.service';

describe('SwgmapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwgmapiService = TestBed.get(SwgmapiService);
    expect(service).toBeTruthy();
  });
});
