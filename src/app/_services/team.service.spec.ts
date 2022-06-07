import { TestBed } from '@angular/core/testing';

import { ElectionService } from './team.service';

describe('TeamService', () => {
  let service: ElectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
