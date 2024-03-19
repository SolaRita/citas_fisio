import { Component, inject } from '@angular/core';
import { Appointment } from '../../interfaces/appointment';
import { AppointmentsService } from '../../services/appointments.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  public AppointmentsService = inject(AppointmentsService);

  public get appointments(): Appointment[] {
    return [...this.AppointmentsService.appointments];
  }
  ngOnChanges() {}
}
