import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorizontalGridComponent, ImageSliderComponent, ScrollableTabComponent } from './components';
import {GridItemDirective, GridItemImageDirective, GridItemTitleDirective} from "./directives";



@NgModule({
  declarations: [
    HorizontalGridComponent,
    ImageSliderComponent,
    ScrollableTabComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
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
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ]
})
export class SharedModule { }
