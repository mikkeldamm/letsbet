import { Bet } from './app.model';

export interface BetState {
    bets: Bet[]
};

export interface AppState {
    bet: BetState;
}

export const initialState: BetState = {
    bets: []
};
