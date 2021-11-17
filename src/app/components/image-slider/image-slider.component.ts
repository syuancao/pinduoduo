import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { clearInterval } from 'timers';

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
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[] = []
  @Input() sliderHeight = '160px'
  @Input() intervalBySeconds = 2
  selectedIndex = 0
  intervalId
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef
  @ViewChildren('img') imgs: QueryList<ElementRef>
  constructor(private rd2: Renderer2) { }

  ngOnInit(): void {
    // console.log('ngOnInit', this.imgSlider)
    // console.log('ngOnInit', this.imgs)
    // this.imgSlider.nativeElement.innerHTML = `<span>Hello</span>`
  }

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement, 
        'scrollLeft', 
        (this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length)
    }, this.intervalBySeconds * 1000)
    // console.log('ngAfterViewInit', this.imgs)
    // this.imgs.forEach(item => item.nativeElement.style.height='100px')
    // this.imgs.forEach(item => {
    //   this.rd2.setStyle(item.nativeElement, 'height', '100px')
    // })
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - Math.abs(idx) % this.sliders.length
  }

  handleScroll(ev) {
    const ratio = ev.target.scrollLeft * this.sliders.length / ev.target.scrollWidth
    this.selectedIndex = Math.round(ratio)
  }
}
