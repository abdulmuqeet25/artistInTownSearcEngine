import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedResultComponent } from './searched-result.component';

describe('SearchedResultComponent', () => {
  let component: SearchedResultComponent;
  let fixture: ComponentFixture<SearchedResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
