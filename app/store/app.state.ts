import { BetState } from './bet.state';
import { UserState } from './user.state';

export interface AppState {
    bet: BetState;
    user: UserState;
}
