import { TestBed } from '@angular/core/testing';

import { UserMockService } from './user-mock.service';

describe('UserMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMockService = TestBed.get(UserMockService);
    expect(service).toBeTruthy();
  });
});
