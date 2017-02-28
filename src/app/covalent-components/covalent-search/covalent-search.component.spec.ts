import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovalentSearchComponent } from './covalent-search.component';

describe('CovalentSearchComponent', () => {
  let component: CovalentSearchComponent;
  let fixture: ComponentFixture<CovalentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovalentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovalentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
