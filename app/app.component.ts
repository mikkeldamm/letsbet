import { Component, OnInit } from "@angular/core";

import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';

import { Page } from "ui/page";
import { topmost } from "ui/frame";

import { Actions as UserActions } from './store/user.actions';
import { User } from './store/user.model';

import * as application from "application";
import * as firebase from "nativescript-plugin-firebase";
const TnsOneSignal = require('nativescript-onesignal').TnsOneSignal;

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

        if (application.ios) {
            application.on(application.launchEvent, function (args: application.ApplicationEventData) {

                TnsOneSignal.initWithLaunchOptionsAppIdHandleNotificationReceivedHandleNotificationActionSettings(
                    args.ios,
                    'b07659e9-7869-437d-badf-d62a878414a8',
                    (a) => {
                        console.log("Notification received", JSON.stringify(a));
                    },
                    (b) => {
                        console.log("Notification action", JSON.stringify(b));
                    },
                    null
                );
            });
        }

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

                        const token = FBSDKAccessToken.currentAccessToken().tokenString;
                        this._store.dispatch(this._actions.setUser({
                            id: data.user.uid,
                            isLoggedIn: true,
                            email: data.user.email,
                            facebookAccessToken: token
                        }));
                    }

                } else {

                    this._store.dispatch(this._actions.removeUser());
                }
            }
        }).then((instance) => {
            console.log("firebase.init done");
        }, (err) => {
            console.log("firebase.error");
        });

        this._page.backgroundSpanUnderStatusBar = true;
        this._page.actionBarHidden = true;
    }
}