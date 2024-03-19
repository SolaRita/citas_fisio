import { Component, Input, inject } from '@angular/core';
import { Appointment } from '../../interfaces/appointment';
import { AppointmentsService } from '../../services/appointments.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
})
export class AppointmentListComponent {
  @Input()
  public appointmentList: Appointment[] = [];
  private AppointmentsService = inject(AppointmentsService);

  trackByFn(index: number, appointment: Appointment): string | undefined {
    return appointment.id;
  }
  onDeleteAppoinment($event: string) {
    this.AppointmentsService.delateAppointment($event);
  }
}
