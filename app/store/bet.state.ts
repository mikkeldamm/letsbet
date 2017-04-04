import { Bet } from './app.model';

export interface BetState {
    bets: Bet[]
};

export const initialBetState: BetState = {
    bets: []
};
