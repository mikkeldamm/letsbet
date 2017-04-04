import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { User, Friend } from './user.model';

@Injectable()
export class Actions {

    static SET_USER = 'Set user';
    static REMOVE_USER = 'Remove user';
    static LOAD_FRIENDS_WITH_APP = 'Load friends with app';
    static FRIENDS_LOADED = 'Friends loaded';

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

    loadFriendsWithApp(accessToken): Action {
        return {
            type: Actions.LOAD_FRIENDS_WITH_APP,
            payload: accessToken
        };
    }

    friendsLoaded(friends: Friend[]): Action {
        return {
            type: Actions.FRIENDS_LOADED,
            payload: friends
        };
    }
}
