import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '../../interfaces/appointment';
import { AppointmentsService } from '../../services/appointments.service';

@Component({
  selector: 'app-add-date',
  templateUrl: './add-date.component.html',
  styleUrl: './add-date.component.scss',
})
export class AddDateComponent {
  private fb = inject(FormBuilder);
  private appointmentsService = inject(AppointmentsService);
  @Output() public onCloseDialog: EventEmitter<void> = new EventEmitter<void>();
  @Input()
  public appointmentToUpdate: Appointment | undefined;

  formDate: FormGroup = this.fb.group({
    name: ['', Validators.required],
  });

  ngOnChanges() {
    if (this.appointmentToUpdate) {
      this.formDate.patchValue({
        name: this.appointmentToUpdate.name,
        id: this.appointmentToUpdate.id,
      });
    }
  }

  onSave() {
    if (this.formDate.valid) {
      this.appointmentsService.createAppointment(this.formDate.value);
      this.formDate.reset();
    } else {
      const inputName = this.formDate.controls['name'].value;
      alert('El nombre' + inputName + 'no es correcto');
    }
  }

  onClose() {
    this.onCloseDialog.emit();
  }

  onUpdate() {
    console.log('isupdate');
    if (this.formDate.valid && this.appointmentToUpdate) {
      this.appointmentsService.updateAppointment(
        this.formDate.value,
        this.appointmentToUpdate.id!
      );
      this.onClose();
    }
  }
}
