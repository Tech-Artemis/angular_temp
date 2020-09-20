import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { TabNavbarComponent } from './components/tab-navbar/tab-navbar.component';
import { SvgModule } from '../shared/svg/svg.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    NewsletterComponent,
    FooterComponent,
    SearchComponent,
    TabNavbarComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    NewsletterComponent,
    FooterComponent,
    TabNavbarComponent
  ]
})
export class CoreModule { }
