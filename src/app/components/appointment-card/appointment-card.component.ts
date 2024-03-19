import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Appointment } from '../../interfaces/appointment';
import { MatDialog } from '@angular/material/dialog';
import { DialogUpdateAppointmentComponent } from '../dialog-update-appointment/dialog-update-appointment.component';
import { AppointmentsService } from '../../services/appointments.service';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrl: './appointment-card.component.scss',
})
export class AppointmentCardComponent {
  public dialog = inject(MatDialog);
  public appointmentsService = inject(AppointmentsService);

  @Output()
  public onDeleteApointment: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public appointment: Appointment = {
    name: '',
    description: '',
  };

  deleteAppointment(id: string) {
    this.onDeleteApointment.emit(id);
  }
  openDialogUpdate(id: string) {
    const appointmentToUpdate = this.appointmentsService.getAppointmentById(id);
    const dialogRef = this.dialog.open(DialogUpdateAppointmentComponent, {
      data: appointmentToUpdate,
    });

    dialogRef.afterClosed().subscribe(() => {});
  }
}
