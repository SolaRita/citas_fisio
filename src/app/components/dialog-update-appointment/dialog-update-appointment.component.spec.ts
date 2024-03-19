import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateAppointmentComponent } from './dialog-update-appointment.component';

describe('DialogUpdateAppointmentComponent', () => {
  let component: DialogUpdateAppointmentComponent;
  let fixture: ComponentFixture<DialogUpdateAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogUpdateAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogUpdateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
