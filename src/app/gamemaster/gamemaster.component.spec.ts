import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamemasterComponent } from './gamemaster.component';

describe('GamemasterComponent', () => {
  let component: GamemasterComponent;
  let fixture: ComponentFixture<GamemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
