import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { TopNavComponent } from './top-nav.component';
import { PageFooterComponent } from './page-footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post.component';
import { AboutComponent } from './about.component'
import { PricingComponent } from './pricing.component';
import { ContactUsComponent } from './contact-us.component';
import { BlogPostService } from './blog-post.service';

import {APP_BASE_HREF} from '@angular/common';

export var TestModuleSetting = {
      declarations: [
            AppComponent,
            HeroComponent,
            TopNavComponent,
            PageFooterComponent,
            BlogComponent,
            BlogPostComponent,
            AboutComponent,
            PricingComponent,
            ContactUsComponent
      ],
      imports: [AppRoutingModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, BlogPostService]
};