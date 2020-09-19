import { TestBed } from '@angular/core/testing';

import { SocialProfilesService } from './social-profiles.service';

describe('SocialProfilesService', () => {
  let service: SocialProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
