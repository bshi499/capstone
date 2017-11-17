import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { DocumentDetailsComponent } from "./documents/document-details/document-details.component";
import { DocumentListComponent } from "./documents/document-list/document-list.component";
import { AnalysisComponent } from "./analysis/analysis.component";
import { CallbackComponent } from "./callback/callback.component";
import { Document } from "./documents/document";
import { NotFoundComponent } from './not-found/not-found.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './auth-guard.service';

const APP_ROUTES = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'upload', component: UploadFileComponent, canActivate: [AuthGuard] }
  { path: 'analysis', component: AnalysisComponent, canActivate: [AuthGuard] },
  { path: 'documents', component: DocumentListComponent, canActivate: [AuthGuard]  },
  // { path: 'documents/:item', component: DocumentListComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

// export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES, { useHash: true });
// Export routes.
export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);

// Combine routing components and export together.
export const routedComponents = [AboutComponent,
                                 HomeComponent,
                                 DocumentListComponent,
                                 AnalysisComponent,
                                 NotFoundComponent,
                                 CallbackComponent];
