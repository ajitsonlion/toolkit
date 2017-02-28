import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovalentPagingComponent } from './covalent-paging.component';

describe('CovalentPagingComponent', () => {
  let component: CovalentPagingComponent;
  let fixture: ComponentFixture<CovalentPagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovalentPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovalentPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
