import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // CheckBox
  isChecked = true;
  onChange($event) {
    this.isChecked = !this.isChecked;
    console.log("new state of the checkbox is " +
      this.isChecked + " The event is " + $event);
  }

  // Select
  colors = [
    { id:1, name:'Red' },
    { id:2, name:'Green' },
    { id:3, name:'Blue' }
  ]

  color = 1;
}
