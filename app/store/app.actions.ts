import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Bet } from './app.model';

@Injectable()
export class Actions {

    static ADD_BET_WITH_DESCRIPTION = 'Add bet with description';
    static UPDATE_BET_WITH_BUYIN = 'Update bet with buyin';

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
}
