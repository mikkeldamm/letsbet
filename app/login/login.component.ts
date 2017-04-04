import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Actions as UserActions } from '../store/user.actions';

import { RouterExtensions } from "nativescript-angular/router";

import { Page } from "ui/page";

import * as firebase from "nativescript-plugin-firebase";

@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: [ "./login-common.css" ]
})
export class LoginComponent implements OnInit {

    public isLoggedIn: boolean = false;
    public email: string;
    public accessToken: string;

    private _betId: string;

    constructor(private _page: Page,
                private _router: RouterExtensions,
                private _route: ActivatedRoute,
                private _store: Store<AppState>,
                private _actions: UserActions) {}

    public ngOnInit() {

        this._page.actionBarHidden = true;
        this._page.enableSwipeBackNavigation = false;
        this._page.backgroundSpanUnderStatusBar = true;

        this._route.params.subscribe(params => {
            this._betId = params['id'];
        });
    }

    public onFacebookButtonLoginTap() {

        firebase.login({
            type: firebase.LoginType.FACEBOOK,
            scope: ['public_profile', 'email', 'user_friends']
        }).then((result) => {

            const token = FBSDKAccessToken.currentAccessToken().tokenString;
            console.log("Facebook AccessToken: " + token);

            this._store.dispatch(this._actions.setUser({
                isLoggedIn: true,
                email: result.email,
                facebookAccessToken: token
            }));

            this._router.navigate(['/create-opponent', this._betId]);

        }, (errorMessage) => {

            // TODO: Make alert to notify user that we NEED access to complete the bet
            console.log("fejl fra facebook login: " + JSON.stringify(errorMessage));
        });
    }
}