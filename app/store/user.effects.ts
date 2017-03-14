import { Injectable, NgZone } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/of';

import { Actions as UserActions } from './user.actions';

@Injectable()
export class UserEffects {

    @Effect()
    load$: Observable<Action> = this._actions$
        .ofType(UserActions.LOAD_FRIENDS_WITH_APP);

    constructor(private _actions$: Actions, private _appActions: UserActions) {}
}