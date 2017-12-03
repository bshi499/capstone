import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Document } from '../document';
import { DocumentService } from '../document.service';
import { DocumentDetailsComponent } from '../document-details/document-details.component';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Component({
  selector: 'document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: Document[];
  selectedDocument: Document;
  item: string;

  private updateUrl = '/api/updateAll';

  constructor(private documentService: DocumentService, private route: ActivatedRoute, private http: Http) {
    this.item = route.snapshot.params['item'];
  }

  updateAlert(i) {
    alert(i + ' documents were updated.');
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
      wordvec: '',
      categories: {
        cluster: '',
        group: ''
      }
    };

    // By default, a newly-created document will have the selected state.
    this.selectDocument(document);
  }

  updateAllDocuments() {

    if(this.documents.length == 0)
    {
      console.log("No documents exist.");
    }
    else
    {
      var numUpdated = 0;

      for(var i = 0; i < this.documents.length; i++)
      {

        if(this.documents[i].wordvec == '')
        {
          var bodyText = this.documents[i].body;
          var sendTextBody = {text: bodyText, num: i};
        
          this.http.post(this.updateUrl, sendTextBody).map((res:Response) => (
            res.json()
          )).subscribe(data => {

            //console.log("Document Index: ", data.idx);
            //console.log("<Vector>: " + data.text);
           
            this.documents[data.idx].wordvec = data.text;
            this.documentService.updateDocument(this.documents[data.idx]);
          });

          console.log("Document ", i, " has not been vectorized yet.");
          numUpdated++;
        }
        else
          console.log("Document ", i, " has already been vectorized.");
      }
      this.updateAlert(numUpdated);
    }
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
