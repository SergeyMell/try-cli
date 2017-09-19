import { Component } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  publicChannel: any;

  constructor(public snackBar: MdSnackBar) {

    this.publicChannel = io('https://soketer.herokuapp.com/');
    this.publicChannel.on('event', (data) => {
      this.snackBar.open(data['joke']);
    });
  }

}
