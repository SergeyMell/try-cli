import { Component, OnInit } from '@angular/core';
import {ROUTE_ANIMATION} from "../animations/routing.animation";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: ROUTE_ANIMATION,
  host: {
    '[@routeAnimation]': ''
  }
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
