import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { TempForm1Component } from './tempForm/temp-form1/temp-form1.component';
import { ReactForm1Component } from './tempForm/react-form1/react-form1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MtrlFormComponent } from './tempForm/mtrl-form/mtrl-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegistrationFormComponent } from './tempForm/registration-form/registration-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { LogInFormComponent } from './tempForm/log-in-form/log-in-form.component';
import { AppointmentFormComponent } from './tempForm/appointment-form/appointment-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    TempForm1Component,
    ReactForm1Component,
    MtrlFormComponent,
    RegistrationFormComponent,
    LogInFormComponent,
    AppointmentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
