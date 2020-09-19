import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'invalid', component: CartComponent }
];

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  bootstrap: [CartComponent]
})
export class CartModule { }
