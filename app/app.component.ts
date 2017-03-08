import { Component, OnInit } from "@angular/core";

import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';

import { Page } from "ui/page";
import { topmost } from "ui/frame";

import { Actions as UserActions } from './store/user.actions';
import { User } from './store/user.model';

import * as firebase from "nativescript-plugin-firebase";

declare var FBSDKAccessToken: any;

@Component({
    selector: "app-main",
    template: `
        <page-router-outlet row="0" col="0"></page-router-outlet>
    `
})
export class AppComponent implements OnInit {

    constructor(private _page: Page, 
                private _store: Store<AppState>,
                private _actions: UserActions) {}

    public ngOnInit() {

        firebase.init({
            onAuthStateChanged: (data) => {
                
                if (data.loggedIn) {

                    if (!FBSDKAccessToken.currentAccessToken()) {
                        
                        firebase.logout().then(() => {
                            console.log("Successfully logging out from firebase");
                        }).catch((err) => {
                            console.log("Error logging out from firebase");
                        });

                    } else {

                        console.log("Logged in to firebase");
                        console.log("User: " + JSON.stringify(data.user));

                        const token = FBSDKAccessToken.currentAccessToken().tokenString;
                        console.log("Facebook AccessToken: " + token);

                        this._store.dispatch(this._actions.setUser({
                            isLoggedIn: true,
                            email: data.user.email,
                            facebookAccessToken: token
                        }));
                    }

                } else {

                    this._store.dispatch(this._actions.removeUser());
                    console.log("Logged out from firebase");
                }
            }
        }).then((instance) => {
            console.log("firebase.init done");
        }, (err) => {
            console.log("firebase.error");
        });

        this._store.select(s => s).subscribe(s => { 
            if (s.bet.bets.length > 0) {
                console.log("BETS 1: "); 
                console.log(s.bet.bets[0].description); 
            }
        });

        this._page.backgroundSpanUnderStatusBar = true;
        this._page.actionBarHidden = true;
    }
}