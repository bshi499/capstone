import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import for NgModel
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileDetailComponent } from './file-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    FileDetailComponent
  ],
  imports: [
    BrowserModule,
    // Import FormsModule here so you can bind with ngModel command
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
