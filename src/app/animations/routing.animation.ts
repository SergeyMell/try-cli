import {animate, style, transition, trigger} from "@angular/animations";

export const ROUTE_ANIMATION = [
  trigger('routeAnimation', [

    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(300, style({transform: 'translateX(0)'}))
    ]),

    transition(':leave', [
      animate(300, style({transform: 'translateX(100%)'}))
    ])

  ])
];
