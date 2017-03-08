import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { User } from './user.model';

@Injectable()
export class Actions {

    static SET_USER = 'Set user';
    setUser(user: User): Action {
        return {
            type: Actions.SET_USER,
            payload: user
        };
    }

    static REMOVE_USER = 'Remove user';
    removeUser(): Action {
        return {
            type: Actions.REMOVE_USER
        }
    }
}
