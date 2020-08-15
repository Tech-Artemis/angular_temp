import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';

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
