import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAttackOutcomeComponent } from './display-attack-outcome.component';

describe('DisplayAttackOutcomeComponent', () => {
  let component: DisplayAttackOutcomeComponent;
  let fixture: ComponentFixture<DisplayAttackOutcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAttackOutcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAttackOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
