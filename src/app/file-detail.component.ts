import { Component, Input } from '@angular/core';

import { File } from './file';
@Component({
  selector: 'file-detail',
  template: `
    <div *ngIf="file">
      <h2>{{file.name}} details</h2>
      <div><label>id: </label>{{file.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="file.name" placeholder="placeholder"/>
      </div>
    </div>
  `
})
export class FileDetailComponent {
  @Input() file: File;
}