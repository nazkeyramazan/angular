import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastpageComponent } from './toastpage.component';

describe('ToastpageComponent', () => {
  let component: ToastpageComponent;
  let fixture: ComponentFixture<ToastpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
