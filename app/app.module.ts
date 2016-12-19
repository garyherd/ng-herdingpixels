import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { TopNavComponent } from './top-nav.component';
import { PageFooterComponent } from './page-footer.component';
import { WrapperComponent } from './wrapper.component';
import { BlogComponent } from './blog.component';


@NgModule({
  imports:  [
    BrowserModule,
    AppRoutingModule
  ],
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
