import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper.component';
import { TopNavComponent } from './top-nav.component';
import { PageFooterComponent } from './page-footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './blog.component';

import {APP_BASE_HREF} from '@angular/common';

export var TestModuleSetting = {
      declarations: [ AppComponent, WrapperComponent, TopNavComponent, PageFooterComponent, BlogComponent ],
      imports: [AppRoutingModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
};