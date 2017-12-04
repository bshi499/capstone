import { Component } from '@angular/core';
import { DocumentService } from './documents/document.service';
import { Document } from './documents/document';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DocumentService]
})
export class AppComponent {
  title = 'Conceptualizer and Categorizer';

  isIn = false;
  constructor(private authService: AuthService) {}
  yell(e) {
    alert("I am yelling.");
    console.log(e);
  }

  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
}
