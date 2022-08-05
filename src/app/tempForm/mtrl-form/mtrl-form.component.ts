import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mtrl-form',
  templateUrl: './mtrl-form.component.html',
  styleUrls: ['./mtrl-form.component.css'],
})
export class MtrlFormComponent implements OnInit {
  regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  pattern = new RegExp(/^[0-9]{10}$/);
  regForm: FormGroup = new FormGroup({
    //registration
    fullName: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(3),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(3),
    ]),
    phNo: new FormControl('', [
      Validators.required,
      Validators.pattern(this.pattern),
    ]),
    rEmail: new FormControl('', [
      Validators.required,
      Validators.pattern(this.regexp),
    ]),
    rPassword: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(3),
    ]),
    cPassword: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  get fullName() {
    return this.regForm.get('fullName');
  }
  get address() {
    return this.regForm.get('address');
  }
  get phNo() {
    return this.regForm.get('phNo');
  }
  get rEmail() {
    return this.regForm.get('rEmail');
  }
  get rPassword() {
    return this.regForm.get('rPassword');
  }
  get cPassword() {
    return this.regForm.get('cPassword');
  }
  get gender() {
    return this.regForm.get('gender');
  }
  register() {
    console.log(this.regForm.value);
  }
  constructor() {}

  ngOnInit(): void {}
}
