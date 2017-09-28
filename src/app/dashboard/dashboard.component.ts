import {Component, OnInit} from '@angular/core';
import {ROUTE_ANIMATION} from "../animations/routing.animation";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

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

  posts: Observable<any>;

  constructor(httpClient: HttpClient) {
    this.posts = httpClient.get('/posts').catch(err => {
      return Observable.throw(err['statusText']);
    });
  }

  ngOnInit() {
  }

}
