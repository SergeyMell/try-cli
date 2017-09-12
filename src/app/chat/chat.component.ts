import {Component} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.template.html'
})
export class ChatComponent {

  messages: FirebaseListObservable<any>;

  constructor(db: AngularFireDatabase, private af: AngularFireAuth) {
    this.messages = db.list('/messages');
  }

  addMessage(message) {
    this.messages.push({
      message: message,
      user: this.af.auth.currentUser.email
    });
  }

}
