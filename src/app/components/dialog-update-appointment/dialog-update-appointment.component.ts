import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Appointment } from '../../interfaces/appointment';
import { AppointmentsService } from '../../services/appointments.service';

@Component({
  selector: 'app-dialog-update-appointment',
  templateUrl: './dialog-update-appointment.component.html',
  styleUrl: './dialog-update-appointment.component.scss',
})
export class DialogUpdateAppointmentComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogUpdateAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Appointment
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
