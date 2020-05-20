import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankviewComponent } from './blankview.component';

describe('BlankviewComponent', () => {
  let component: BlankviewComponent;
  let fixture: ComponentFixture<BlankviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
