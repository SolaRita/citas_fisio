import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AddDateComponent } from './components/add-date/add-date.component';
import { MainComponent } from './pages/main/main.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentCardComponent } from './components/appointment-card/appointment-card.component';
import { DialogUpdateAppointmentComponent } from './components/dialog-update-appointment/dialog-update-appointment.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddDateComponent,
    AppointmentListComponent,
    AppointmentCardComponent,
    DialogUpdateAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
