import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';

import { appReducer } from './app.reducer';
import { userReducer } from './user.reducer';

const reducers = {
    bet: appReducer,
    user: userReducer
};

export function rootReducer(state: any, action: any) {
    return combineReducers(reducers)(state, action);
}
