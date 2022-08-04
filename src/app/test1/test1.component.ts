import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit {
  text2: any;
  constructor() {}

  ngOnInit(): void {}

  print($event: any) {
    $event.stopPropagation();
    console.log('Btn Clicked', $event);
  }

  print2() {
    console.log('Div Clicked');
  }

  extractValue(name: any) {
    console.log(name);
  }

  egTwoWayBind() {
    console.log(this.text2);
  }
}
