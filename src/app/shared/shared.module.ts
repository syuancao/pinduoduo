import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorizontalGridComponent, ImageSliderComponent, ScrollableTabComponent } from './components';



@NgModule({
  declarations: [
    HorizontalGridComponent,
    ImageSliderComponent,
    ScrollableTabComponent
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
    ScrollableTabComponent
  ]
})
export class SharedModule { }
 