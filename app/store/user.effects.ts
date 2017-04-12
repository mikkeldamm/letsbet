import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';

import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';

import { User, Friend, FacebookFriend } from './user.model';
import { Actions as UserActions } from './user.actions';

import * as firebase from "nativescript-plugin-firebase";
const TnsOneSignal = require('nativescript-onesignal').TnsOneSignal;

@Injectable()
export class UserEffects {

    @Effect()
    loadFriendsWithApp$: Observable<Action> = this._actions$
        .ofType(UserActions.LOAD_FRIENDS_WITH_APP)
        .switchMap(s => {
            return this._http
                .get(`https://graph.facebook.com/v2.8/me/friends?fields=picture,id,name,installed&access_token=${s.payload}`)
                .map(res => res.json())
                .map(fb => {
                    return fb.data.map(fbFriend => {
                        return <FacebookFriend>{
                            facebookId: fbFriend.id,
                            name: fbFriend.name,
                            profilePicture: fbFriend.picture.data.url
                        };
                    });
                })
                .map(friends => this._userActions.facebookFriendsLoaded(friends))
                .catch((err) => {
                    console.log("ERROR LOADING FACEBOOK FRIENDS ----");
                    console.log(JSON.stringify(err));
                    return of(this._userActions.facebookFriendsLoaded([]));
                });
        });

    @Effect()
    facebookFriendsLoaded$: Observable<Action> = this._actions$
        .ofType(UserActions.FACEBOOK_FRIENDS_LOADED)
        .switchMap(s => {
            return Observable.fromPromise(
                new Promise<Friend[]>((resolve, reject) => {
                    let _friends = [];
                    s.payload.forEach(f => {
                        firebase.query(
                            () => {}, 
                            `/users/${f.facebookId}`,
                            { singleEvent: true, orderBy: { type: firebase.QueryOrderByType.KEY } }
                        ).then(d => {
                            if (d.value) {
                                _friends.push(Object.assign({}, f, { id: d.value }));
                                if (_friends.length === s.payload.length) {
                                    resolve(_friends);
                                }
                            }
                        });
                    });
                })
            )
        })
        .switchMap(friends => {
            return of(this._userActions.friendsLoaded(friends));
        });

    @Effect()
    setUser$: Observable<Action> = this._actions$
        .ofType(UserActions.SET_USER)
        .switchMap(s => {
            return this._http
                .get(`https://graph.facebook.com/v2.8/me?fields=id&access_token=${s.payload.facebookAccessToken}`)
                .map(res => res.json())
                .map(fb => Object.assign({}, s.payload, { facebookId: fb.id }))
        })
        .switchMap(user => {
            return Observable.fromPromise(
                firebase.update(`/users`, { [user.facebookId]: user.id })
            ).map(x => user);
        })
        .switchMap(user => {
            return Observable.fromPromise(new Promise((resolve, reject) => {
                TnsOneSignal.IdsAvailable((userId, token) => {
                    firebase
                        .update(`/users_push_tokens`, { [user.id]: { token: token, userId: userId } })
                        .then(resolve)
                        .catch(reject);
                });
            }));
        })
        .map(s => this._userActions.userSaved())
        .catch((err) => {
            console.log("ERRRRRRRROOOOOOOOORRRRRR: " + JSON.stringify(err));
            return of(this._userActions.userNotSaved());
        });


    constructor(private _actions$: Actions,
                private _userActions: UserActions,
                private _http: Http) { }
}