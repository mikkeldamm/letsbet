import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { AppState } from '../store/app.state';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private _router: Router,
                private _route: ActivatedRoute,
                private _store: Store<AppState>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let betId: string = route.params['id'];

        return this._store.take(1).switchMap(s => {
            if (s.user.isLoggedIn) {

                let currentState;
                this._store.take(1).subscribe(s => currentState = s);

                console.log("-----------------")
                console.log("- User is logged ind");
                console.log("- Redirect to create opponent going through login");
                console.log("- Current Id: " + betId);
                console.log("- Current state: " + JSON.stringify(currentState));

                this._router.navigate(['/create-opponent', betId]);
                return Observable.of(false);
            } else {
                return Observable.of(true);
            }
        });
    }
}
