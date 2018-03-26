import { TestBed, inject } from '@angular/core/testing';

import { WtapiService } from './wtapi.service';

describe('WtapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WtapiService]
    });
  });

  it('should be created', inject([WtapiService], (service: WtapiService) => {
    expect(service).toBeTruthy();
  }));
});
