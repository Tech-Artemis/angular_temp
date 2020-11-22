//Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Custom modules
import { HomeComponent } from './home/home.component';

//Third party modules
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SvgModule } from '../shared/svg/svg.module';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    SvgModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    HomeComponent,
    SvgModule
  ]
})
export class HomeModule { }
