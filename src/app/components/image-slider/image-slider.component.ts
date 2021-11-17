import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  @Input() sliders: ImageSlider[] = []
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit', this.imgSlider)
    // this.imgSlider.nativeElement.innerHTML = `<span>Hello</span>`
  }

}
