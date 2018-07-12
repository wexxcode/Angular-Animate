import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('600ms ease-in'))
    ]),
  ]
})
export class PopoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show = false;

  get stateName() {
      return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = !this.show;
  }

}
