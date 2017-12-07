import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../documents/document';
import { DocumentService } from '../documents/document.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  uploadTitle = "File Upload";
  description = 'This app can be used to cluster text documents based on their content using an affinity propagation method.';
  instructions = 'Upload text files that you would like clustered to the database. Clustering can be run from the analysis page, where results will appear.';

  @Input() doc: Document;
  selectedDocument: Document;

  private uploadUrl = '/api/uploads';

  constructor(private documentService: DocumentService, private http: Http) {
    this.fileString;
  }

  uploadAlert() {
    alert('Document upload complete!');
  }

  public fileString;

  ngOnInit() {
  }

  changeListener($event) : void {
    this.readMultiple($event.target);
    //this.readThis($event.target);
  }

  /*
  readThis(inputValue: any) : void {
    var output = [];
    for (var i = 0, f; f = inputValue.files[i]; i++) {
      output.push('<li><strong>', f.name, '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';

    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
    var docEntry:Document = new Document();
    docEntry.name = file.name;
    myReader.onloadend = (e) => {
      
      // you can perform an action with read data here
      console.log(myReader.result);
      this.fileString = myReader.result;

      document.getElementById( 'ms_word_filtered_html').innerText = this.fileString;
      docEntry.body = myReader.result;

      var sendInput = {text: this.fileString};
      
      // post file data to server via '/api/uploads'
      // receive post-conversion data and places it into the wordvec field, then creates the document
      // conversion must be handled server side as child process & python cannot be done in the frontend
      this.http.post(this.uploadUrl, sendInput).map((res:Response) => (
            res.json()
          )).subscribe(data => {
          
          docEntry.wordvec = data;

          this.documentService.createDocument(docEntry);
      });

      // console.log(this.fileString);
      // Both below methods work.
      //(<HTMLInputElement>document.getElementById( 'ms_word_filtered_html')).value = this.fileString;      
      // original
      // document.getElementById( 'ms_word_filtered_html').innerText = this.fileString;
      // docEntry.body = myReader.result;
      // this.documentService.createDocument(docEntry);
      // this.uploadAlert();
    };

    myReader.readAsText(file);
    this.uploadAlert();
  }
  */
  
  readMultiple(inputFiles: any) {
    var files = inputFiles.files;
    
    Object.keys(files).forEach(i => {

      var file = files[i];
      var reader = new FileReader();
      var docEntry:Document = new Document();
      docEntry.name = file.name;

      reader.onload = (e) => {
      
        console.log(reader.result);
        this.fileString = reader.result;

        if(files.length == 1)
          document.getElementById( 'ms_word_filtered_html').innerText = this.fileString;
        docEntry.body = reader.result;

        var sendInput = {text: this.fileString};

        this.http.post(this.uploadUrl, sendInput).map((res:Response) => (
              res.json()
          )).subscribe(data => {

          console.log("<Vector>: " + data);
          
          docEntry.wordvec = data;

          this.documentService.createDocument(docEntry);
        });
      };

      reader.readAsBinaryString(file);
    });

    this.uploadAlert();
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

}