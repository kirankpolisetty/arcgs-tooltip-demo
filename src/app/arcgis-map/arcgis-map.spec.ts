import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcgisMap } from './arcgis-map';

describe('ArcgisMap', () => {
  let component: ArcgisMap;
  let fixture: ComponentFixture<ArcgisMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcgisMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcgisMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
