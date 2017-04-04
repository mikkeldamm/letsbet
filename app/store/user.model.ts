export interface User {
    readonly id: string;
    readonly isLoggedIn: boolean;
    readonly email: string;
    readonly facebookAccessToken: string;
}

export interface Friend {
    readonly id: string;
    readonly facebookId: number;
    readonly name: string;
    readonly profilePicture: string;
}