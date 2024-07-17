import { TestBed } from '@angular/core/testing';

import { SolarService } from './solar.service';
import { provideHttpClient } from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('SolarService', () => {
  let service: SolarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SolarService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    const httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SolarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
