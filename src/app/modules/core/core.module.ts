import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NewsletterComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    NewsletterComponent,
    FooterComponent
  ]
})
export class CoreModule { }
