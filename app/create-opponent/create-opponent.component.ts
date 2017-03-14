import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { RouterExtensions } from 'nativescript-angular/router';

import { Page } from "ui/page";
import { ListView } from "ui/list-view";
import { Color } from 'color';

import { Actions as AppActions } from '../store/app.actions';
import { Actions as UserActions } from '../store/user.actions';
import { AppState } from '../store/app.state';
import { Bet } from '../store/app.model';
import { Friend } from '../store/user.model';

import * as application from "application";
import * as firebase from "nativescript-plugin-firebase";

export class DataItem {
    constructor(public id: number, public name: string) { }
}

@Component({
    selector: "create-opponent",
    moduleId: module.id,
    templateUrl: "./create-opponent.component.html",
    styleUrls: ["./create-opponent-common.css"]
})
export class CreateOpponentComponent implements OnInit, AfterViewInit {

    @ViewChild("listContainer") listContainer: ElementRef;

    public friends: Friend[] = [];

    private _betId: string;

    constructor(private _page: Page,
                private _router: RouterExtensions,
                private _route: ActivatedRoute,
                private _store: Store<AppState>,
                private _actions: AppActions,
                private _userActions: UserActions) {}

    public ngOnInit() {

        this._page.actionBarHidden = true;
        this._page.enableSwipeBackNavigation = false;
        this._page.backgroundSpanUnderStatusBar = true;

        this._page.on("navigatingTo", () => {
            this.setNewSeperatorColor();
        });

        this._route.params.subscribe(params => {
            this._betId = params['id'];
        });

        this._store
            .select(s => s.user)
            .map(u => u.friends)
            .filter(friends => friends.length > 0)
            .subscribe(friends => {
                this.friends = friends;
            });

        this._store.dispatch(this._userActions.loadFriendsWithApp());

        for (var i = 0; i < 3; i++) {
            //this.friends.push(new DataItem(i, "data item " + i));
        }        
    }

    public ngAfterViewInit() {

        this.setNewSeperatorColor();
    }

    public setNewSeperatorColor() {

        const listView = this.listContainer.nativeElement as ListView;
        if (listView) {
            listView.ios.separatorColor = new Color("#e20000");
        }
    }
}
