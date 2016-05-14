// (function(app) {
//   document.addEventListener('DOMContentLoaded', function() {
//     ng.platformBrowserDynamic.bootstrap(app.AppComponent);
//   });
// })(window.app || (window.app = {}));

//Gengwu Li: changed to typescript
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

bootstrap(AppComponent);

