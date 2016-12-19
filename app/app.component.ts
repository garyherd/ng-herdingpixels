import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <top-nav></top-nav>
    <!-- WRAPPER -->
    <div id="wrapper">
      <router-outlet></router-outlet>
    </div>
    <!-- /WRAPPER -->
    <page-footer></page-footer>
    `
})
export class AppComponent  {}
