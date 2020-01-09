import { TestBed } from '@angular/core/testing';

import { YouraddsService } from './youradds.service';

describe('YouraddsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YouraddsService = TestBed.get(YouraddsService);
    expect(service).toBeTruthy();
  });
});
