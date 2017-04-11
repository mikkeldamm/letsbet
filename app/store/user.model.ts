export interface User {
    readonly id: string;
    readonly isLoggedIn: boolean;
    readonly email: string;
    readonly facebookId?: string;
    readonly facebookAccessToken: string;
}

export interface Friend {
    readonly id: string;
    readonly name: string;
    readonly profilePicture: string;
}

export interface FacebookFriend {
    readonly facebookId: string;
    readonly name: string;
    readonly profilePicture: string;
}