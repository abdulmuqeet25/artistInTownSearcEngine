import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEventsComponent } from './artist-events.component';

describe('ArtistEventsComponent', () => {
  let component: ArtistEventsComponent;
  let fixture: ComponentFixture<ArtistEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
