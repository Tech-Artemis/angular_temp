import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { CartModule } from './modules/cart/cart.module';
import { ComingSoonModule } from './modules/shared/common-components/coming-soon/coming-soon.module';

const appRoutes: Routes = [
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module')
      .then(module => module.HomeModule)
  },
  {
    path: 'cart', loadChildren: () => import('./modules/shared/common-components/coming-soon/coming-soon.module')
      .then(module => module.ComingSoonModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    HomeModule,
    BrowserAnimationsModule,
    CartModule,
    ComingSoonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
