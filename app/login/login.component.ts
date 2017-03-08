import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
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
export class LoginComponent implements OnInit {

    public isLoggedIn: boolean = false;
    public email: string;
    public accessToken: string;

    public loggedInText: string = '';

    constructor(private _cd: ChangeDetectorRef,
                private _page: Page,
                private _router: Router,
                private _routerExtensions: RouterExtensions,
                private _http: Http,
                private _store: Store<AppState>) {

        this._page.actionBarHidden = true;
        this._page.enableSwipeBackNavigation = false;
        this._page.backgroundSpanUnderStatusBar = true;
    }

    public ngOnInit() {

        this._store
            .map(s => s.user)
            .subscribe(user => {

                this.isLoggedIn = user.isLoggedIn;
                this.email = user.email;
                this.accessToken = user.facebookAccessToken;
                this._cd.detectChanges();

                if (this.isLoggedIn) {
                    
                    this.loggedInText += this.email + '\n';
                    this.loggedInText += '-------------------\n';
                    this.loggedInText += this.accessToken + '\n';

                    this._http.get('https://graph.facebook.com/v2.8/me/friends?fields=installed&access_token=' + user.facebookAccessToken)
                        .map(res => res.json())
                        .subscribe(res => {
                            console.log("FBDATA: " + JSON.stringify(res));
                            this.loggedInText += '-------------------\n';
                            this.loggedInText += JSON.stringify(res) + '\n';
                            this._cd.detectChanges();
                        }, err => {
                            console.log("FBERROR: " + JSON.stringify(err));
                        });

                    this._http.get('https://graph.facebook.com/v2.8/me/?access_token=' + user.facebookAccessToken)
                        .map(res => res.json())
                        .subscribe(res => {
                            console.log("FBDATA: " + JSON.stringify(res));
                            this.loggedInText += '-------------------\n';
                            this.loggedInText += JSON.stringify(res) + '\n';
                            this._cd.detectChanges();
                        }, err => {
                            console.log("FBERROR: " + JSON.stringify(err));
                        });

                } else {

                    this.loggedInText = '';
                    this._cd.detectChanges();
                }
            });
    }

    public onFacebookButtonLoginTap() {

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