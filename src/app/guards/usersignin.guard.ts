import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {CanActivate} from "@angular/router";

@Injectable()
export class UserSignedInGuard implements CanActivate {

  constructor(private af: AngularFireAuth) {

  }

  canActivate() {
    return new Promise((resolve, reject) => {
        this.af.authState.subscribe(
          (data) => {
            if (data) {
              resolve(true);
            } else {
              resolve(false);
            }
          });
  });
}

}
