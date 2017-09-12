import { Component } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: any;

  constructor(private af: AngularFireAuth) {
    this.user = af.authState;
  }

  registerUser(email, password) {
    this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email, password) {
    this.af.auth.signInWithEmailAndPassword(email, password);
  }

}
