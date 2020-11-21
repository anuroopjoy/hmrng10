import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { hmrModule, bootloader } from '@angularclass/hmr';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export function main() {
  return (
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      // use `hmrModule` or the "@angularclass/hmr-loader"
      .then((ngModuleRef: any) => {
        if (environment.production) {
          return;
        }
        // `module` global ref for webpackhmr
        // Don't run this in Prod
        return hmrModule(ngModuleRef, module);
      })
  );
}

// boot on document ready
bootloader(main);
