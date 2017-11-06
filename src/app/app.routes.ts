import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { DocumentDetailsComponent } from "./documents/document-details/document-details.component";
import { DocumentListComponent } from "./documents/document-list/document-list.component";
import { AnalysisComponent } from "./analysis/analysis.component";
import { Document } from "./documents/document";

import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'documents', component: DocumentListComponent },
  // { path: 'documents/:item', component: DocumentListComponent },
  { path: 'analysis', component: AnalysisComponent }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);
