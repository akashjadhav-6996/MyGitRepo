import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-form1',
  templateUrl: './temp-form1.component.html',
  styleUrls: ['./temp-form1.component.css'],
})
export class TempForm1Component implements OnInit {
  register(regForm: any) {
    console.log(regForm);
  }
  constructor() {}

  ngOnInit(): void {}
}
