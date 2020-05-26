import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './contents/home-page/home-page.module#HomePageModule',
    data: {
      page: 'home'
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: {
      page: ''
    }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
