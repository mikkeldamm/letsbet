import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Bet } from './bet.model';

@Injectable()
export class Actions {

    static ADD_BET_WITH_DESCRIPTION = 'Add bet with description';
    static UPDATE_BET_WITH_BUYIN = 'Update bet with buyin';
    static UPDATE_BET_WITH_OPPONENT = 'Update bet with opponent';
    static SAVE_BET = 'Save bet';
    static BET_SAVED = 'Bet saved';

    addBetWithDescription(bet: Bet): Action {
        return {
            type: Actions.ADD_BET_WITH_DESCRIPTION,
            payload: bet
        };
    }

    updateBetWithBuyin(id: string, buyin: string): Action {
        return {
            type: Actions.UPDATE_BET_WITH_BUYIN,
            payload: { id, buyin }
        };
    }

    updateBetWithOpponent(id: string, opponentId: string): Action {
        return {
            type: Actions.UPDATE_BET_WITH_OPPONENT,
            payload: { id, opponentId }
        };
    }

    saveBet(id: string): Action {
        return {
            type: Actions.SAVE_BET,
            payload: id
        };
    }

    betSaved(): Action {
        return {
            type: Actions.BET_SAVED
        }
    }
}
