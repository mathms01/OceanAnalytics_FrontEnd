import { TestBed } from '@angular/core/testing';

import { WhaleapiService } from './whaleapi.service';

describe('WhaleapiService', () => {
  let service: WhaleapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhaleapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
