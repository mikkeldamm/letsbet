import { Action } from '@ngrx/store';

import { UserState, initialUserState } from './user.state';
import { Actions } from './user.actions';
import { User } from './user.model';

export function userReducer(state = initialUserState, action: Action): UserState {
    switch (action.type) {

        case Actions.SET_USER: {
            return Object.assign({}, state, action.payload);
        }

        case Actions.REMOVE_USER: {
            return Object.assign({}, state, { isLoggedIn: false, email: null, facebookAccessToken: null });
        }

        case Actions.LOAD_FRIENDS_WITH_APP: {
            return state;
        }

        case Actions.FRIENDS_LOADED: {
            console.log("FRIENDS LOADED: ", JSON.stringify(action.payload));
            return Object.assign({}, state, { friends: action.payload });
        }

        default: {
            return state;
        }
    }
}