import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovalentStepperComponent } from './covalent-stepper.component';

describe('CovalentStepperComponent', () => {
  let component: CovalentStepperComponent;
  let fixture: ComponentFixture<CovalentStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovalentStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovalentStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
