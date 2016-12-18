import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TopNavComponent } from './top-nav.component';
import { PageFooterComponent } from './page-footer.component';
import { WrapperComponent } from './wrapper.component';
import { BlogComponent } from './blog.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    PageFooterComponent,
    WrapperComponent,
    TopNavComponent,
    BlogComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
