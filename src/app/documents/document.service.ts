import { Injectable } from '@angular/core';
import { Document } from './document';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DocumentService {
    private documentsUrl = '/api/documents';

    constructor (private http: Http) {}

    // get("/api/documents")
    getDocuments(): Promise<Document[]> {
      return this.http.get(this.documentsUrl)
                 .toPromise()
                 .then(response => response.json() as Document[])
                 .catch(this.handleError);
    }

    // post("/api/documents")
    createDocument(newDocument: Document): Promise<Document> {
      return this.http.post(this.documentsUrl, newDocument)
                 .toPromise()
                 .then(response => response.json() as Document)
                 .catch(this.handleError);
    }

    // get("/api/documents/:id") endpoint not used by Angular app

    // delete("/api/documents/:id")
    deleteDocument(delDocumentId: String): Promise<String> {
      return this.http.delete(this.documentsUrl + '/' + delDocumentId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/documents/:id")
    updateDocument(putDocument: Document): Promise<Document> {
      var putUrl = this.documentsUrl + '/' + putDocument._id;
      return this.http.put(putUrl, putDocument)
                 .toPromise()
                 .then(response => response.json() as Document)
                 .catch(this.handleError);
    }

    private handleError (error: any): Promise<any> {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console
      return Promise.reject(errMsg);
    }
}
