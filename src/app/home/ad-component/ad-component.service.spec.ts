import { TestBed } from '@angular/core/testing';

import { AdComponent.ServiceService } from './ad-component.service.service';

describe('AdComponent.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdComponent.ServiceService = TestBed.get(AdComponent.ServiceService);
    expect(service).toBeTruthy();
  });
});
