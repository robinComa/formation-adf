import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermDialogComponent } from './perm-dialog.component';

describe('PermDialogComponent', () => {
  let component: PermDialogComponent;
  let fixture: ComponentFixture<PermDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
