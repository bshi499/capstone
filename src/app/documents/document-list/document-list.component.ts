import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Document } from '../document';
import { DocumentService } from '../document.service';
import { DocumentDetailsComponent } from '../document-details/document-details.component';

@Component({
  selector: 'document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: Document[]
  selectedDocument: Document
  item: string;

  constructor(private documentService: DocumentService, private route: ActivatedRoute) {
    this.item = route.snapshot.params['item'];
  }



  ngOnInit() {

     this.documentService
      .getDocuments()
      .then((documents: Document[]) => {
        this.documents = documents.map((document) => {
          if (!document.categories) {
            document.categories = {
              cluster: '',
              group: ''
            }
          }
          return document;
        });
      });
  }

  private getIndexOfDocument = (documentId: String) => {
    return this.documents.findIndex((document) => {
      return document._id === documentId;
    });
  }

  selectDocument(document: Document) {
    this.selectedDocument = document
  }

  createNewDocument() {
    var document: Document = {
      name: '',
      body: '',
      categories: {
        cluster: '',
        group: ''
      }
    };

    // By default, a newly-created document will have the selected state.
    this.selectDocument(document);
  }

  deleteDocument = (documentId: String) => {
    var idx = this.getIndexOfDocument(documentId);
    if (idx !== -1) {
      this.documents.splice(idx, 1);
      this.selectDocument(null);
    }
    return this.documents;
  }

  addDocument = (document: Document) => {
    this.documents.push(document);
    this.selectDocument(document);
    return this.documents;
  }

  updateDocument = (document: Document) => {
    var idx = this.getIndexOfDocument(document._id);
    if (idx !== -1) {
      this.documents[idx] = document;
      this.selectDocument(document);
    }
    return this.documents;
  }
}
