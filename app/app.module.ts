import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TopNavComponent } from './top-nav.component';
import { PageFooterComponent } from './page-footer.component';
import { HeroComponent } from './hero.component';
import { BlogComponent } from './blog.component';
import { BlogPostPreviewComponent } from './blog-post-preview.component';
import { AboutComponent } from './about.component';
import { PricingComponent } from './pricing.component';
import { ContactUsComponent } from './contact-us.component';
import { BlogPostService } from './blog-post.service';
import { BlogPostFullComponent } from './blog-post-full.component';
import { BlogPostCommentsComponent } from './blog-post-comments.component';
import { AuditRequestFormComponent } from './audit-request-form.component';
import { EmailJsService } from './emailjs.service'


@NgModule({
  imports:  [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PageFooterComponent,
    HeroComponent,
    TopNavComponent,
    BlogComponent,
    BlogPostPreviewComponent,
    AboutComponent,
    PricingComponent,
    ContactUsComponent,
    BlogPostFullComponent,
    BlogPostCommentsComponent,
    AuditRequestFormComponent
  ],
  providers: [BlogPostService, EmailJsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
