import { TestBed } from '@angular/core/testing';

import { RecetasLectorService } from './recetas-lector.service';

describe('RecetasLectorService', () => {
  let service: RecetasLectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetasLectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
