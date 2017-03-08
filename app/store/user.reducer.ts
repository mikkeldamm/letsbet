import { Action } from '@ngrx/store';

import { UserState, initialUserState } from './app.state';
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

        default: {
            return state;
        }
    }
}