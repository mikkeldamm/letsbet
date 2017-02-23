
import { Component, OnInit } from "@angular/core";

import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';

import { Page } from "ui/page";
import { topmost } from "ui/frame";

import * as firebase from "nativescript-plugin-firebase";

declare var NSMutableDictionary: any;
declare var UIColor: any;
declare var UITextAttributeTextColor: any;

@Component({
    selector: "app-main",
    template: `
        <page-router-outlet row="0" col="0"></page-router-outlet>
    `
})
export class AppComponent implements OnInit {

    constructor(private _page: Page, private _store: Store<AppState>) {

    }

    public ngOnInit() {

        firebase.init({
            onMessageReceivedCallback: function(message) {
                console.log("Title: " + message.title);
                console.log("Body: " + message.body);
            },
            onPushTokenReceivedCallback: function(token) {
                console.log("Firebase push token: " + token);
            },
            onAuthStateChanged: (data) => { // optional
                console.log((data.loggedIn ? "Logged in to firebase" : "Logged out from firebase") + " (init's onAuthStateChanged callback)");
            }
        }).then((instance) => {
            console.log("firebase.init done");
            firebase.push('/lars', { name: 'Damm damm', age: 20});
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