import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsviewComponent } from './picsview.component';

describe('PicsviewComponent', () => {
  let component: PicsviewComponent;
  let fixture: ComponentFixture<PicsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
