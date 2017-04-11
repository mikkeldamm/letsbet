import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';

import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/withLatestFrom';

import { AppState } from './app.state';

import { Bet } from './bet.model';
import { Actions as BetActions } from './app.actions';

import * as firebase from "nativescript-plugin-firebase";

@Injectable()
export class BetEffects {

    @Effect()
    load$: Observable<Action> = this._actions$
        .ofType(BetActions.SAVE_BET)
        .withLatestFrom(this._store$)
        .switchMap(([ action, appState ]) => {

            const betId = action.payload;
            const bet = appState.bet.bets.find(b => b.id === betId);

            console.log("BETID: ", betId);
            console.log("BET: ", JSON.stringify(bet));

            firebase.push(
                `/bets`,
                {
                    id: bet.id,
                    createdAt: firebase.ServerValue.TIMESTAMP,
                    info: {
                        initiator: appState.user.id,
                        opponent: bet.opponentId
                    },
                    details: {
                        description: bet.description,
                        buyin: bet.buyin
                    }
                }
            ).then(a => {
                console.log("BET SAVED!");
            }).catch(b => {
                console.log("WHAT!!!!" + b.message);
            });

            return of(this._betActions.betSaved());
        });

    constructor(private _store$: Store<AppState>,
                private _actions$: Actions,
                private _betActions: BetActions,
                private _http: Http) { }
}

interface SaveAction extends Action {
    payload: Bet;
}