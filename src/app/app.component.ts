import { Component } from '@angular/core';
import { DocumentService } from './documents/document.service';
import { Document } from './documents/document';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DocumentService]
})
export class AppComponent {
  title = 'ConCat: Conceptualizer and Categorizer';


  name = 'file';
    file = {
      name: "name from AppComponent",
      body: "body from AppComponent"
    };

  constructor(private documentService: DocumentService) {
  }

  yell(e) {
    alert("I am yelling.");
    console.log(e);
  }
}
