import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../documents/document';
import { DocumentService } from '../documents/document.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @Input()
  document: Document;

  constructor (private documentService: DocumentService) {}

  createDocument(document: Document) {
    this.documentService.createDocument(document);
  }

  ngOnInit() {
  }

}
