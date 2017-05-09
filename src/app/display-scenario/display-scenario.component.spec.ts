import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayScenarioComponent } from './display-scenario.component';

describe('DisplayScenarioComponent', () => {
  let component: DisplayScenarioComponent;
  let fixture: ComponentFixture<DisplayScenarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayScenarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
