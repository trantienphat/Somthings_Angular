import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './contents/home-page/home-page.component';
// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full',
//     data: {
//       page: ''
//     }
//   },
//   {
//     path: '**',
//     redirectTo: 'home'
//   },
//   {
//     path: 'home',
//     loadChildren: './contents/home-page/home-page.module#HomePageModule',
//     data: {
//       page: 'home'
//     }
//   }
// ];

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
  // { path: '**', component:  } //404 Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
