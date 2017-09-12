import { Component } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: any;

  constructor(private af: AngularFireAuth, private router: Router, private location: Location) {
    this.user = af.authState;
  }

  registerUser(email, password) {
    this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email, password) {
    this.af.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(this.location['_baseHref']);
    });
  }

}
