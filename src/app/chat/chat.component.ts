import {Component} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.template.html'
})
export class ChatComponent {

  messages: FirebaseListObservable<any>;

  constructor(db: AngularFireDatabase) {
    this.messages = db.list('/messages');
  }

  addMessage(message) {
    this.messages.push({message: message});
  }

}
