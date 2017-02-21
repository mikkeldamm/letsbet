import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Bet } from './app.model';

@Injectable()
export class Actions {

    static ADD_BET = 'Add bet';
    addBet(bet: Bet): Action {
        return {
            type: Actions.ADD_BET,
            payload: bet
        };
    }
}
