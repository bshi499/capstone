import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DocumentDetailsComponent } from './documents/document-details/document-details.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { AnalysisComponent } from './analysis/analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentDetailsComponent,
    DocumentListComponent,
    HomeComponent,
    AboutComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
