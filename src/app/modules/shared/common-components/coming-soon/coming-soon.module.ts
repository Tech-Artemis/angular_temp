import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'cart', component: ComingSoonComponent }
];

@NgModule({
  declarations: [ComingSoonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  bootstrap: [ComingSoonComponent]
})
export class ComingSoonModule { }
