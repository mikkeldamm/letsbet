import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { Http } from '@angular/http';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { User } from '../store/user.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { RouterExtensions } from "nativescript-angular/router";

import { Page } from "ui/page";

import * as firebase from "nativescript-plugin-firebase";

declare var FBSDKAccessToken: any;

@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: [ "./login-common.css" ]
})
export class LoginComponent {

    constructor(private _page: Page,
                private _router: Router,
                private _routerExtensions: RouterExtensions,
                private _http: Http,
                private _store: Store<AppState>) {

        this._page.actionBarHidden = true;
        this._page.enableSwipeBackNavigation = false;
        this._page.backgroundSpanUnderStatusBar = true;
    }

    public onFacebookButtonTap() {

        let user: User;
        this._store.take(1).map(s => s.user).subscribe(u => user = u);

        if (user.isLoggedIn) {
            
            this._http.get('https://graph.facebook.com/v2.8/me/friends?fields=installed&access_token=' + user.facebookAccessToken)
                .map(res => res.json())
                .subscribe(res => {
                    console.log("FBDATA: " + JSON.stringify(res));
                }, err => {
                    console.log("FBERROR: " + JSON.stringify(err));
                });

            this._http.get('https://graph.facebook.com/v2.8/me/?access_token=' + user.facebookAccessToken)
                .map(res => res.json())
                .subscribe(res => {
                    console.log("FBDATA: " + JSON.stringify(res));
                }, err => {
                    console.log("FBERROR: " + JSON.stringify(err));
                });

        } else {

            firebase.login({
                type: firebase.LoginType.FACEBOOK,
                scope: ['public_profile', 'email', 'user_friends']
            }).then((result) => {}, (errorMessage) => {});
        }
    }

    public onFacebookButtonLogoutTap() {

        firebase.logout().then(() => {
            console.log("user logout");
        });
    }
}