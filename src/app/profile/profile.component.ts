import {Component, HostBinding, OnInit} from '@angular/core';
import {ROUTE_ANIMATION} from "../animations/routing.animation";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: ROUTE_ANIMATION
})
export class ProfileComponent implements OnInit {

  @HostBinding('@routeAnimation') '';

  constructor() { }

  ngOnInit() {
  }

}
