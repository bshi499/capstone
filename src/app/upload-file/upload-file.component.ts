import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../documents/document';
import { DocumentService } from '../documents/document.service';

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

  constructor(private documentService: DocumentService) {
    this.fileString;
  }

  uploadAlert() {
    alert('Document upload complete!');
  }

  public fileString;

  ngOnInit() {
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }

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
    docEntry.wordvec = file.type;
    myReader.onloadend = (e) => {
      // you can perform an action with read data here
      console.log(myReader.result);
      this.fileString = myReader.result;
      // console.log(this.fileString);
      // Both below methods work.
      //(<HTMLInputElement>document.getElementById( 'ms_word_filtered_html')).value = this.fileString;
      document.getElementById( 'ms_word_filtered_html').innerText = this.fileString;
      docEntry.body = myReader.result;

      this.documentService.createDocument(docEntry);
      this.uploadAlert();
    };

    myReader.readAsText(file);
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
