import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchArtistComponent } from './header-search-artist.component';

describe('HeaderSearchArtistComponent', () => {
  let component: HeaderSearchArtistComponent;
  let fixture: ComponentFixture<HeaderSearchArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSearchArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
