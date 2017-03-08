import { Action } from '@ngrx/store';

import { BetState, initialBetState } from './app.state';
import { Actions } from './app.actions';
import { Bet } from './app.model';

export function appReducer(state = initialBetState, action: Action): BetState {
    switch (action.type) {

        case Actions.ADD_BET: {
            const newState = Object.assign({}, state, { bets: [...state.bets, action.payload] });
            return newState;
        }

        default: {
            return state;
        }
    }
}