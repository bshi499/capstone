import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConCat: Conceptualizer and Categorizer';
  name = 'file';
    file = {
      name: "name from AppComponent",
      body: "body from AppComponent"
    };
  yell(e) {
    alert("I am yelling.");
    console.log(e);
  }
}
