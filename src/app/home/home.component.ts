import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the homepage (file upload)!";
  myString = "Testing";
  myBoolean = false;

  @Input() file;
  @Output() onYell = new EventEmitter();
  file2 = {
    name: "filename",
    body: "This is the body of the file."
  };

  alertMe() {
    alert('Testing alert!');
  }
  fireYellEvent(e) {
    this.onYell.emit(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
