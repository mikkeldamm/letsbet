export interface User {
    readonly isLoggedIn: boolean;
    readonly email: string;
    readonly facebookAccessToken: string;
}

export interface Friend {
    readonly id: string;
    readonly name: string;
    readonly profilePicture: string;
}