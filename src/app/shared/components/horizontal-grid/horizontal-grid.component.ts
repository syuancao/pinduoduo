import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  channels: Channel[] = [

  ]
  constructor() { }

  ngOnInit(): void {
  }
}
