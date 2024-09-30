import { TestBed } from '@angular/core/testing';

import { ProjectUrlService } from './project-url.service';

describe('ProjectUrlService', () => {
  let service: ProjectUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
