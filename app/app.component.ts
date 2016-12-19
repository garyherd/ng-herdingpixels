import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <top-nav></top-nav>
    <router-outlet></router-outlet>
    <page-footer></page-footer>
    `
})
export class AppComponent  {}
