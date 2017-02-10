import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { TopNavComponent } from './top-nav.component';
import { PageFooterComponent } from './page-footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './blog.component';
import { BlogPostPreviewComponent } from './blog-post-preview.component';
import { AboutComponent } from './about.component'
import { PricingComponent } from './pricing.component';
import { ContactUsComponent } from './contact-us.component';
import { BlogPostService } from './blog-post.service';
import { BlogPostFullComponent } from './blog-post-full.component';
import { BlogPostCommentsComponent } from './blog-post-comments.component';
import { AuditRequestFormComponent } from './audit-request-form.component';
import { EmailJsService } from './emailjs.service';

import {APP_BASE_HREF} from '@angular/common';

import * as moment from 'moment';

export var TestModuleSetting = {
      declarations: [
            AppComponent,
            HeroComponent,
            TopNavComponent,
            PageFooterComponent,
            BlogComponent,
            BlogPostPreviewComponent,
            AboutComponent,
            PricingComponent,
            ContactUsComponent,
            BlogPostFullComponent,
            BlogPostCommentsComponent,
            AuditRequestFormComponent
      ],
      imports: [AppRoutingModule, HttpModule, FormsModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, BlogPostService, EmailJsService]
};