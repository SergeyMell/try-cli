import {Component} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  publicChannel: any;
  privateChannel: any;
  currentUser: any;
  users = [];
  messages = [];

  constructor(public snackBar: MdSnackBar) {

    this.publicChannel = io('https://soketer.herokuapp.com/');
    this.publicChannel.on('event', (data) => {
      this.snackBar.open(data['joke']);
    });
    this.publicChannel.on('user_join', (data) => {
      this.users.push(data);
    });
    this.publicChannel.on('public_message', (data) => {
      this.messages.push(data);
    });
  }

  joinUser(name) {
    const userObject = {
      id: Date.now(),
      name
    };

    // This could be simple Ajax request
    this.publicChannel.emit('user_join', userObject);
    this.currentUser = userObject;

    this.privateChannel = io(`https://soketer.herokuapp.com/users/${userObject.id}`);
    this.privateChannel.on('direct_message', (data) => {
      data.privateMessage = true;
      this.messages.push(data);
    });
  }

  sendMessage(message, toUser) {
    if (toUser) {
      this.publicChannel.emit('private_message', {
        message,
        user: this.currentUser,
        to: toUser
      });
    } else {
      this.publicChannel.emit('public_message', {
        message,
        user: this.currentUser
      });
    }
  }

}
