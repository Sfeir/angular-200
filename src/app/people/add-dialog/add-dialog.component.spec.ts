import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDialogComponent } from './add-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MdDialogRef, MdDialogModule
} from '@angular/material';

class MdDialogRefMock {};

describe('AddDialogComponent', () => {
  let component: AddDialogComponent;
  let fixture: ComponentFixture<AddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MdDialogModule ],
      declarations: [ AddDialogComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefMock },
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
