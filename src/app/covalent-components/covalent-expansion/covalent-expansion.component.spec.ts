import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovalentExpansionComponent } from './covalent-expansion.component';

describe('CovalentExpansionComponent', () => {
  let component: CovalentExpansionComponent;
  let fixture: ComponentFixture<CovalentExpansionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovalentExpansionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovalentExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
