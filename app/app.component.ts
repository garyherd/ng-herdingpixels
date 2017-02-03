import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <top-nav></top-nav>
    <audit-request-form></audit-request-form>
    <!-- WRAPPER -->
    <div id="wrapper">
      <router-outlet></router-outlet>
    </div>
    <!-- /WRAPPER -->
    <page-footer></page-footer>
    `,

})
export class AppComponent  {}
