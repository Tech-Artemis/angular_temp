import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';

@NgModule({
  declarations: [
    SvgDefinitionsComponent,
    SvgIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgDefinitionsComponent,
    SvgIconComponent
  ]
})
export class SvgModule { }
