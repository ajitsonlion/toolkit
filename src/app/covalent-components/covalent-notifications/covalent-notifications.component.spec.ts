import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovalentNotificationsComponent } from './covalent-notifications.component';

describe('CovalentNotificationsComponent', () => {
  let component: CovalentNotificationsComponent;
  let fixture: ComponentFixture<CovalentNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovalentNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovalentNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
