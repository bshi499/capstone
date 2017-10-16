import { Component } from '@angular/core';

import { File } from './file';

const FILES: File[] = [
  { id: 11, name: 'File 1' },
  { id: 12, name: 'File 2' },
  { id: 13, name: 'File 3' },
  { id: 14, name: 'File 4' },

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Conceptualizer and Categorizer';
  files = FILES;
  selectedFile: File;

  onSelect(file: File): void {
    this.selectedFile = file;
  }

  testfile: File = {
    id: 1,
    name: 'First file'
  };
}

export class AppComponent2 {
  title = 'app';
}