import { TestBed } from '@angular/core/testing';

import { NetCoreService } from './net-core.service';

describe('NetCoreService', () => {
  let service: NetCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
