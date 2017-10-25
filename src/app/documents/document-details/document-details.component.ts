import { Component, Input } from '@angular/core';
import { Document } from '../document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent {

  @Input()
  document: Document;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private documentService: DocumentService) {}

  createDocument(document: Document) {
    this.documentService.createDocument(document).then((newDocument: Document) => {
      this.createHandler(newDocument);
    });
  }

  updateDocument(document: Document): void {
    this.documentService.updateDocument(document).then((updatedDocument: Document) => {
      this.updateHandler(updatedDocument);
    });
  }

  deleteDocument(documentId: String): void {
    this.documentService.deleteDocument(documentId).then((deletedDocumentId: String) => {
      this.deleteHandler(deletedDocumentId);
    });
  }
}
