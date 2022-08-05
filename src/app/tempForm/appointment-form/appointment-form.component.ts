import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css'],
})
export class AppointmentFormComponent implements OnInit {
  packages: any[] = [
    { value: 'steak', viewValue: 'Steak' },
    { value: 'pizza', viewValue: 'Pizza' },
    { value: 'tacos', viewValue: 'Tacos' },
  ];
  minDate = new Date();
  appointmentForm: FormGroup = new FormGroup({
    pName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.max(100)]),
    aptDate: new FormControl('', [Validators.required]),
    pkgName: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  get pName() {
    return this.appointmentForm.get('pName');
  }

  get age() {
    return this.appointmentForm.get('age');
  }

  get aptDate() {
    return this.appointmentForm.get('aptDate');
  }

  get pkgName() {
    return this.appointmentForm.get('pkgName');
  }

  get gender() {
    return this.appointmentForm.get('gender');
  }
  constructor() {}
  onFormSubmit() {
    console.log(this.appointmentForm.value);
  }

  ngOnInit(): void {}
}
