import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { TopNavComponent } from './top-nav.component';
import { PageFooterComponent } from './page-footer.component';
import { HeroComponent } from './hero.component';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post.component';
import { AboutComponent } from './about.component';
import { PricingComponent } from './pricing.component';
import { ContactUsComponent } from './contact-us.component';
import { BlogPostService } from './blog-post.service';


@NgModule({
  imports:  [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageFooterComponent,
    HeroComponent,
    TopNavComponent,
    BlogComponent,
    BlogPostComponent,
    AboutComponent,
    PricingComponent,
    ContactUsComponent
  ],
  providers: [BlogPostService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
