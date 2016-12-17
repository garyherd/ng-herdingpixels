import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TopNavComponent } from './top-nav.component';
import { PageFooterComponent } from './page-footer.component';
import { WrapperComponent } from './wrapper.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    PageFooterComponent,
    WrapperComponent,
    TopNavComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
