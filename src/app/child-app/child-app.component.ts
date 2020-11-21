import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.scss'],
})
export class ChildAppComponent implements OnInit {
  counter = 0;

  increment() {
    ++this.counter;
  }
  constructor() {}

  ngOnInit(): void {}
}
