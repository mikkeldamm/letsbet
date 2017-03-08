import { Bet } from './app.model';

export interface BetState {
    bets: Bet[]
};

export interface UserState {
    isLoggedIn: boolean;
    email: string;
    facebookAccessToken: string;
}

export interface AppState {
    bet: BetState;
    user: UserState;
}

export const initialBetState: BetState = {
    bets: []
};

export const initialUserState: UserState = {
    isLoggedIn: false,
    email: null,
    facebookAccessToken: null
};
