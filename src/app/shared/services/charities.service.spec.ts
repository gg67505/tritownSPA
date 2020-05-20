import { TestBed } from '@angular/core/testing';

import { CharitiesService } from './charities.service';

describe('CharitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharitiesService = TestBed.get(CharitiesService);
    expect(service).toBeTruthy();
  });
});
