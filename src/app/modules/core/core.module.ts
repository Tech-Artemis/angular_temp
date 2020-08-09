import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
