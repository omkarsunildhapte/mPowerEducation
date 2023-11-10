import { TestBed } from '@angular/core/testing';

import { HistoryCheckService } from './history-check.service';

describe('HistoryCheckService', () => {
  let service: HistoryCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
