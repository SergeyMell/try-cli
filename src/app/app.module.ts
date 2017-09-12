import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {ChatComponent} from './chat/chat.component';
import {RouterModule, Routes} from "@angular/router";
import {UserSignedInGuard} from "./guards/usersignin.guard";

const routes: Routes = [
  {path: '', component: ChatComponent, canActivate: [UserSignedInGuard]}
];

@NgModule({
  declarations: [
    AppComponent, ChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [UserSignedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
