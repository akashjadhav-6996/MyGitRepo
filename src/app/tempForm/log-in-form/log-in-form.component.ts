import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css'],
})
export class LogInFormComponent implements OnInit {
  regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  logInForm: FormGroup = new FormGroup({
    //login

    Email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.regexp),
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(3),
    ]),
  });

  get Email() {
    return this.logInForm.get('Email');
  }
  get Password() {
    return this.logInForm.get('Password');
  }

  login() {
    console.log(this.logInForm.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
