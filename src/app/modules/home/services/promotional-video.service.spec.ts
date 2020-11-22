import { TestBed } from '@angular/core/testing';

import { PromotionalVideoService } from './promotional-video.service';

describe('PromotionalVideoService', () => {
  let service: PromotionalVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionalVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
