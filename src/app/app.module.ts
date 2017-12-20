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
import { APP_ROUTES_PROVIDER, routedComponents } from './app.routes';
import { AnalysisComponent } from './analysis/analysis.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DocumentService } from './documents/document.service';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DocumentDetailsComponent,
    DocumentListComponent,
    HomeComponent,
    AboutComponent,
    AnalysisComponent,
    UploadFileComponent,
    NotFoundComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [
    DocumentService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
