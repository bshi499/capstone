import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import for NgModel
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppComponent2 } from './app.component';
import { FileDetailComponent } from './file-detail.component'
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent2,
    ContactDetailsComponent,
    ContactListComponent,
    FileDetailComponent
  ],
  imports: [
    BrowserModule,
    // Import FormsModule here so you can bind with ngModel command
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppComponent2]
})
export class AppModule { }
