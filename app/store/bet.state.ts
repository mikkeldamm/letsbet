import { Bet } from './bet.model';

export interface BetState {
    bets: Bet[]
};

export const initialBetState: BetState = {
    bets: []
};
