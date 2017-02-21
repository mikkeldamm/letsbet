import { NgModule } from "@angular/core";

import { StoreModule } from '@ngrx/store';

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { rootReducer } from './store/root.reducer';
import { Actions } from './store/app.actions';

import { IOS_UTILS } from './utils/index';

import { setStatusBarColors } from "./utils/status-bar";

import { authProviders, appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";

import { CreateBetModule } from "./create-bet/create-bet.module";
import { CreateBuyinModule } from "./create-buyin/create-buyin.module";

setStatusBarColors();

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        StoreModule.provideStore(rootReducer),
        CreateBetModule,
        CreateBuyinModule
    ],
    providers: [
        Actions,
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
