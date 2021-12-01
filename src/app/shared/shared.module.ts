import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorizontalGridComponent, ImageSliderComponent, ScrollableTabComponent } from './components';
import {GridItemDirective} from "./directives";



@NgModule({
  declarations: [
    HorizontalGridComponent,
    ImageSliderComponent,
    ScrollableTabComponent,
    GridItemDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HorizontalGridComponent,
    ImageSliderComponent,
    ScrollableTabComponent,
    GridItemDirective
  ]
})
export class SharedModule { }
