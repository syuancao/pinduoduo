import {Directive, ElementRef, Renderer2} from "@angular/core";

@Directive({
  selector: '[appGridItemTitle]',
})

export class GridItemTitleDirective {
  constructor(private elr: ElementRef, private rd2: Renderer2) {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title');
  }
}
