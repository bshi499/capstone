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

  public fileString;

  changeListener($event) : void {
    this.readThis($event.target);
  }
  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      // you can perform an action with readed data here
      console.log(myReader.result);
      this.fileString = myReader.result;
      console.log(this.fileString);
      // Both below methods work.
      //(<HTMLInputElement>document.getElementById( 'ms_word_filtered_html')).value = this.fileString;
      document.getElementById( 'ms_word_filtered_html').innerText = this.fileString;
    };

    myReader.readAsText(file);
  }
  constructor() {
    this.fileString;
  }

  ngOnInit() {
  }

}
