import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovalentChipsComponent } from './covalent-chips.component';

describe('CovalentChipsComponent', () => {
  let component: CovalentChipsComponent;
  let fixture: ComponentFixture<CovalentChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovalentChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovalentChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
