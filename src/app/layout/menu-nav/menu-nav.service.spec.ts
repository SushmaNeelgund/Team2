import { TestBed } from '@angular/core/testing';

import { MenuNavService } from './menu-nav.service';

describe('MenuNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuNavService = TestBed.get(MenuNavService);
    expect(service).toBeTruthy();
  });
});
