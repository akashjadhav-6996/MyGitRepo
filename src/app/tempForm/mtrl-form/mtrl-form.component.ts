import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mtrl-form',
  templateUrl: './mtrl-form.component.html',
  styleUrls: ['./mtrl-form.component.css'],
})
export class MtrlFormComponent implements OnInit {
  regForm = new FormGroup({
    //login
    email: new FormControl(''),
    password: new FormControl(''),
    //registration
    fullName: new FormControl(''),
    address: new FormControl(''),
    phNo: new FormControl(''),
    rEmail: new FormControl(''),
    rPassword: new FormControl(''),
    cPassword: new FormControl(''),
    //gender: new FormControl(''),
  });
  register() {}
  login() {}
  constructor() {}

  ngOnInit(): void {}
}
