import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';

import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';

import { Friend } from './user.model';
import { Actions as UserActions } from './user.actions';

@Injectable()
export class UserEffects {

    @Effect()
    load$: Observable<Action> = this._actions$
        .ofType(UserActions.LOAD_FRIENDS_WITH_APP)
        .switchMap(s => {
            return of(this._userActions.friendsLoaded([{ 
                id: "10212394758567559",
                facebookId: 10212394758567559,
                name: "Rasmus Idémager Smartass Madsen",
                profilePicture: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/16426193_10212182172693045_2235338685028513534_n.jpg?oh=86a15cf073d817a93839fde930f39b27&oe=5959C0C8"
            }]));
            /*
            return this._http
                .get(`https://graph.facebook.com/v2.8/me/friends?fields=picture,id,name,installed&access_token=${s.payload}`)
                .map(res => res.json())
                .map(fb => {
                    return fb.data.map(fbFriend => {
                        return <Friend>{
                            id: fbFriend.id,
                            name: fbFriend.name,
                            profilePicture: fbFriend.picture.data.url
                        };
                    });
                })
                .map(friends => this._userActions.friendsLoaded(friends))
                .catch((err) => {
                    console.log("ERROR---------------------------");
                    console.log(JSON.stringify(err));
                    return of(this._userActions.friendsLoaded([]));
                });
                */
        });

    constructor(private _actions$: Actions,
        private _userActions: UserActions,
        private _http: Http) { }
}