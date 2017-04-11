import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { User, Friend, FacebookFriend } from './user.model';

@Injectable()
export class Actions {

    static SET_USER = 'Set user';
    static USER_SAVED = 'User saved';
    static USER_NOT_SAVED = 'User not saved';

    static REMOVE_USER = 'Remove user';
    static LOAD_FRIENDS_WITH_APP = 'Load friends with app';
    static FACEBOOK_FRIENDS_LOADED = 'Facebook friends loaded';
    static FRIENDS_LOADED = 'Friends loaded';

    setUser(user: User): Action {
        return {
            type: Actions.SET_USER,
            payload: user
        };
    }

    userSaved(): Action {
        return {
            type: Actions.USER_SAVED
        }
    }

    userNotSaved(): Action {
        return {
            type: Actions.USER_NOT_SAVED
        }
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

    facebookFriendsLoaded(facebookFriends: FacebookFriend[]): Action {
        return {
            type: Actions.FACEBOOK_FRIENDS_LOADED,
            payload: facebookFriends
        };
    }

    friendsLoaded(friends: Friend[]): Action {
        return {
            type: Actions.FRIENDS_LOADED,
            payload: friends
        };
    }
}
