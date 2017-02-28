import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovalentFileUploadComponent } from './covalent-file-upload.component';

describe('CovalentFileUploadComponent', () => {
  let component: CovalentFileUploadComponent;
  let fixture: ComponentFixture<CovalentFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovalentFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovalentFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
