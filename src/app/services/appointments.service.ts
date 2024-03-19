import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/appointment';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  public appointments: Appointment[] = [];

  constructor() {}

  createAppointment(appointment: Appointment) {
    let newApointment: Appointment = {
      id: uuid(),
      ...appointment,
    };
    this.appointments.push(newApointment);
  }

  delateAppointment(id: string) {
    this.appointments = this.appointments.filter(
      (appointment) => appointment.id !== id
    );
  }

  updateAppointment(newAppointment: Appointment, id: string) {
    let index = this.appointments.findIndex(
      (appointment) => appointment.id === id
    );
    if (index !== -1) {
      this.appointments[index] = {
        id: id,
        ...newAppointment,
      };
    }
  }

  getAppointmentById(id: string): Appointment | undefined {
    return this.appointments.find((appointment) => appointment.id === id);
  }
}
