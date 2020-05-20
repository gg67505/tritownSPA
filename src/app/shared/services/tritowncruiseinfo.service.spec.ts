import { TestBed } from '@angular/core/testing';

import { TritowncruiseinfoService } from './tritowncruiseinfo.service';

describe('TritowncruiseinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TritowncruiseinfoService = TestBed.get(TritowncruiseinfoService);
    expect(service).toBeTruthy();
  });
});
