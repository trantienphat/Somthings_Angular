import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const homeRoutes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(homeRoutes),
    ],
    declarations: [
        HomePageComponent
    ],
    entryComponents: []
})
export class HomePageModule { }
