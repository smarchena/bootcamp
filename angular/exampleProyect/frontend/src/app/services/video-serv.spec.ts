import { TestBed } from '@angular/core/testing';

import { VideoServ } from './video-serv';

describe('VideoServ', () => {
  let service: VideoServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
