import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isChecked = true;
  isCheckedRadio = true;
  onChange($event) {
    this.isChecked = !this.isChecked;
    console.log("new state of the checkbox is " +
      this.isChecked + " The event is " + $event);
  }
}
