import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { WrapperComponent } from './wrapper.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/wrapper', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent },
  { path: 'wrapper', component: WrapperComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
