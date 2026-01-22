import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComp } from './video-comp';

describe('VideoComp', () => {
  let component: VideoComp;
  let fixture: ComponentFixture<VideoComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
