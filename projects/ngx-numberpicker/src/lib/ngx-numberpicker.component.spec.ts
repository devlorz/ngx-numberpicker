import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNumberpickerComponent } from './ngx-numberpicker.component';

describe('NgxNumberpickerComponent', () => {
  let component: NgxNumberpickerComponent;
  let fixture: ComponentFixture<NgxNumberpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNumberpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNumberpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
