import { Component, ViewChild } from '@angular/core';
import { ImageSlider, ImageSliderComponent, TopMenu } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(ImageSliderComponent) imgSlider: ImageSliderComponent
  scrollableTabBgColor = 'red'
  topMenus: TopMenu[] = [  
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '电脑',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    },
    {
      title: '家装',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '家具',
      link: ''
    }
  ] 

  imageSliders: ImageSlider[] = []

  username = ''

  handleTabSelected(topMenu: TopMenu) {
    const colors = ['red', 'blue', 'black']
    const idx = Math.floor(Math.random() * 3)
    this.scrollableTabBgColor = colors[idx]
    console.log(topMenu)
  }

  ngAfterViewInit(): void {
    console.log(this.imgSlider)
  }
}
