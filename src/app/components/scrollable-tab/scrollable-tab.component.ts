import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
/**
 * 接口时可选的，也就说只要有类似 ngOnInit 这样的方法存在
 * 生命周期的钩子函数还是正常执行
 * 但建议实现接口，好处一个是不会由于误删除某个钩子函数
 * 另一个是对组件涉及到哪些生命周期一目了然
 */
export class ScrollableTabComponent implements OnInit, OnChanges {

  selectedIndex = -1
  @Input() menus: TopMenu[] = []
  @Input() backgroundColor = '#fff'
  @Input() titleActiveColor = 'yellow'
  @Input() titleColor = 'blue'
  @Input() indicatorColor = 'brown'
  @Output() tabSelected = new EventEmitter()
  /**
   * 构造函数永远首先被调用
   */
  constructor() {
    console.log('组件构造调用')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('组件输入属性改变', changes)
  }
  /**
   * 组件初始化完成，在这个函数中，我们可以安全的使用组件的属性和方法
   */
  ngOnInit(): void {
    console.log('组件初始化')
  }

  ngDoCheck(): void {
    console.log('组件脏值检测')
  }

  handleSelection(index: number) {
    this.selectedIndex = index
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }
}
