import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  customer = '';
  customerList = [];
  add(val) {
    this.customerList.push(val);
    this.customer = '';
  }
}
