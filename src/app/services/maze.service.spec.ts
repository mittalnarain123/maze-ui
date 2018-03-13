import { TestBed, inject } from '@angular/core/testing';

import { MazeService } from './maze.service';

describe('MazeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MazeService]
    });
  });

  it('should be created', inject([MazeService], (service: MazeService) => {
    expect(service).toBeTruthy();
  }));
});
