import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmMapComponent } from './gm-map.component';

describe('GmMapComponent', () => {
  let component: GmMapComponent;
  let fixture: ComponentFixture<GmMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
