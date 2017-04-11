import { Friend } from './user.model';

export interface UserState {
    id: string;
    isLoggedIn: boolean;
    email: string;
    facebookAccessToken: string;
    friends: Friend[];
}

export const initialUserState: UserState = {
    id: null,
    isLoggedIn: false,
    email: null,
    facebookAccessToken: null,
    friends: []
};
