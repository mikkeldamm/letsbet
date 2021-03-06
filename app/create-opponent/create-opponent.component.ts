import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Page } from "ui/page";

import { Actions as AppActions } from '../store/app.actions';
import { Actions as UserActions } from '../store/user.actions';
import { AppState } from '../store/app.state';
import { Friend } from '../store/user.model';

@Component({
    selector: "create-opponent",
    moduleId: module.id,
    templateUrl: "./create-opponent.component.html",
    styleUrls: ["./create-opponent-common.css"]
})
export class CreateOpponentComponent implements OnInit {

    public friends: Friend[] = [];
    public choosenFriend: Friend = null;

    private _betId: string;

    constructor(private _page: Page,
                private _route: ActivatedRoute,
                private _store: Store<AppState>,
                private _actions: AppActions,
                private _userActions: UserActions) {}

    public ngOnInit() {

        this._page.actionBarHidden = true;
        this._page.enableSwipeBackNavigation = false;
        this._page.backgroundSpanUnderStatusBar = true;

        this._route.params.subscribe(params => {
            this._betId = params['id'];
        });

        this._store
            .select(s => s.user)
            .filter(u => u.friends.length > 0)
            .subscribe(u => {
                this.friends = u.friends;
                console.log("FRIENDS LOADED AND SET!!!!!!!", JSON.stringify(this.friends));
            }); 

        let accessToken: string;
        this._store.take(1).select(s => s.user).subscribe(u => accessToken = u.facebookAccessToken);
        this._store.dispatch(this._userActions.loadFriendsWithApp(accessToken));
    }

    public onFriendTap(friend: Friend) {

        this.choosenFriend = friend;
    }

    public createAndGoToBet() {

        this._store.dispatch(this._actions.updateBetWithOpponent(this._betId, this.choosenFriend.id));
        this._store.dispatch(this._actions.saveBet(this._betId));
    }
}
