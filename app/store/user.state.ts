import { Friend } from './user.model';

export interface UserState {
    isLoggedIn: boolean;
    email: string;
    facebookAccessToken: string;
    friends: Friend[];
}

export const initialUserState: UserState = {
    isLoggedIn: false,
    email: null,
    facebookAccessToken: null,
    friends: []
};
