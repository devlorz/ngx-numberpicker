import { TestBed } from '@angular/core/testing';

import { NgxNumberpickerService } from './ngx-numberpicker.service';

describe('NgxNumberpickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxNumberpickerService = TestBed.get(NgxNumberpickerService);
    expect(service).toBeTruthy();
  });
});
