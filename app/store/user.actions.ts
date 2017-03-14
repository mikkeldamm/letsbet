import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { User } from './user.model';

@Injectable()
export class Actions {

    static SET_USER = 'Set user';
    static REMOVE_USER = 'Remove user';
    static LOAD_FRIENDS_WITH_APP = 'Load friends with app';

    setUser(user: User): Action {
        return {
            type: Actions.SET_USER,
            payload: user
        };
    }

    removeUser(): Action {
        return {
            type: Actions.REMOVE_USER
        }
    }

    loadFriendsWithApp(): Action {
        return {
            type: Actions.LOAD_FRIENDS_WITH_APP
        };
    }
}
