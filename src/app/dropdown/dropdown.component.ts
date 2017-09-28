import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  animations: [
    trigger('dropdownState', [

      state('closed', style({
        opacity: 0
      })),

      state('opened', style({
        opacity: 1
      })),

      transition('closed <=> opened', animate(300))
    ])
  ]
})

export class DropdownComponent implements OnInit {

  state = 'closed';

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.state = this.state === 'closed' ? 'opened' : 'closed';
  }

}
