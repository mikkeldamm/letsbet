import { Action } from '@ngrx/store';

import { BetState, initialBetState } from './bet.state';
import { Actions } from './app.actions';
import { Bet } from './bet.model';

export function appReducer(state = initialBetState, action: Action): BetState {
    switch (action.type) {

        case Actions.ADD_BET_WITH_DESCRIPTION: {
            return Object.assign({}, state, { bets: [...state.bets, action.payload] });
        }

        case Actions.UPDATE_BET_WITH_BUYIN: {
            const betId = action.payload.id;
            const betBuyin = action.payload.buyin;

            const newBets = state.bets.map(b => {
                if (b.id === betId) {
                    return Object.assign({}, b, { buyin: betBuyin });
                }

                return b;
            })
            return Object.assign({}, state, { bets: newBets });
        }

        case Actions.UPDATE_BET_WITH_OPPONENT: {
            const betId = action.payload.id;
            const opponentId = action.payload.opponentId;

            const newBets = state.bets.map(b => {
                if (b.id === betId) {
                    return Object.assign({}, b, { opponentId });
                }

                return b;
            })
            return Object.assign({}, state, { bets: newBets });
        }

        default: {
            return state;
        }
    }
}
