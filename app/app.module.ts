import { NgModule } from "@angular/core";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { rootReducer } from './store/root.reducer';
import { Actions as AppActions } from './store/app.actions';
import { Actions as UserActions } from './store/user.actions';
import { UserEffects } from './store/user.effects';
import { BetEffects } from './store/bet.effects';

import { IOS_UTILS } from './utils/index';

import { setStatusBarColors } from "./utils/status-bar";

import { authProviders, appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";

import { CreateBetModule } from "./create-bet/create-bet.module";
import { CreateBuyinModule } from "./create-buyin/create-buyin.module";
import { LoginModule } from "./login/login.module";
import { CreateOpponentModule } from "./create-opponent/create-opponent.module";

setStatusBarColors();

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        StoreModule.provideStore(rootReducer),
        EffectsModule.run(UserEffects),
        EffectsModule.run(BetEffects),
        CreateBetModule,
        CreateBuyinModule,
        LoginModule,
        CreateOpponentModule
    ],
    providers: [
        AppActions,
        UserActions,
        ...IOS_UTILS
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
