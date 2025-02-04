import { TestBed } from '@angular/core/testing';

import { WhaleimageService } from './whaleimage.service';

describe('WhaleimageService', () => {
  let service: WhaleimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhaleimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
