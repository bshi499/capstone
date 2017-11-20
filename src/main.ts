import './polyfills.ts';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { APP_ROUTES_PROVIDER } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

var isIn = false;
toggleStat() {
  let bool = this.isIn;
  this.isIn = bool === false ? true : false;
};

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
