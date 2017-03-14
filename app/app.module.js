"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var root_reducer_1 = require("./store/root.reducer");
var app_actions_1 = require("./store/app.actions");
var user_actions_1 = require("./store/user.actions");
var index_1 = require("./utils/index");
var status_bar_1 = require("./utils/status-bar");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var create_bet_module_1 = require("./create-bet/create-bet.module");
var create_buyin_module_1 = require("./create-buyin/create-buyin.module");
var login_module_1 = require("./login/login.module");
var create_opponent_module_1 = require("./create-opponent/create-opponent.module");
status_bar_1.setStatusBarColors();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routes_1.appRoutes),
            store_1.StoreModule.provideStore(root_reducer_1.rootReducer),
            create_bet_module_1.CreateBetModule,
            create_buyin_module_1.CreateBuyinModule,
            login_module_1.LoginModule,
            create_opponent_module_1.CreateOpponentModule
        ],
        providers: [
            app_actions_1.Actions,
            user_actions_1.Actions
        ].concat(index_1.IOS_UTILS),
        declarations: [
            app_component_1.AppComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMscUNBQTBDO0FBRTFDLGdGQUE4RTtBQUM5RSxrREFBbUU7QUFDbkUsc0RBQXVFO0FBRXZFLHFEQUFtRDtBQUNuRCxtREFBNEQ7QUFDNUQscURBQThEO0FBRTlELHVDQUEwQztBQUUxQyxpREFBd0Q7QUFFeEQsMkNBQXdEO0FBQ3hELGlEQUErQztBQUUvQyxvRUFBaUU7QUFDakUsMEVBQXVFO0FBQ3ZFLHFEQUFtRDtBQUNuRCxtRkFBZ0Y7QUFFaEYsK0JBQWtCLEVBQUUsQ0FBQztBQTBCckIsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBeEJyQixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsNkJBQXNCO1lBQ3RCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsc0JBQVMsQ0FBQztZQUMzQyxtQkFBVyxDQUFDLFlBQVksQ0FBQywwQkFBVyxDQUFDO1lBQ3JDLG1DQUFlO1lBQ2YsdUNBQWlCO1lBQ2pCLDBCQUFXO1lBQ1gsNkNBQW9CO1NBQ3ZCO1FBQ0QsU0FBUztZQUNMLHFCQUFVO1lBQ1Ysc0JBQVc7aUJBQ1IsaUJBQVMsQ0FDZjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyByb290UmVkdWNlciB9IGZyb20gJy4vc3RvcmUvcm9vdC5yZWR1Y2VyJztcbmltcG9ydCB7IEFjdGlvbnMgYXMgQXBwQWN0aW9ucyB9IGZyb20gJy4vc3RvcmUvYXBwLmFjdGlvbnMnO1xuaW1wb3J0IHsgQWN0aW9ucyBhcyBVc2VyQWN0aW9ucyB9IGZyb20gJy4vc3RvcmUvdXNlci5hY3Rpb25zJztcblxuaW1wb3J0IHsgSU9TX1VUSUxTIH0gZnJvbSAnLi91dGlscy9pbmRleCc7XG5cbmltcG9ydCB7IHNldFN0YXR1c0JhckNvbG9ycyB9IGZyb20gXCIuL3V0aWxzL3N0YXR1cy1iYXJcIjtcblxuaW1wb3J0IHsgYXV0aFByb3ZpZGVycywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLnJvdXRlc1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBDcmVhdGVCZXRNb2R1bGUgfSBmcm9tIFwiLi9jcmVhdGUtYmV0L2NyZWF0ZS1iZXQubW9kdWxlXCI7XG5pbXBvcnQgeyBDcmVhdGVCdXlpbk1vZHVsZSB9IGZyb20gXCIuL2NyZWF0ZS1idXlpbi9jcmVhdGUtYnV5aW4ubW9kdWxlXCI7XG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ3JlYXRlT3Bwb25lbnRNb2R1bGUgfSBmcm9tIFwiLi9jcmVhdGUtb3Bwb25lbnQvY3JlYXRlLW9wcG9uZW50Lm1vZHVsZVwiO1xuXG5zZXRTdGF0dXNCYXJDb2xvcnMoKTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpLFxuICAgICAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUocm9vdFJlZHVjZXIpLFxuICAgICAgICBDcmVhdGVCZXRNb2R1bGUsXG4gICAgICAgIENyZWF0ZUJ1eWluTW9kdWxlLFxuICAgICAgICBMb2dpbk1vZHVsZSxcbiAgICAgICAgQ3JlYXRlT3Bwb25lbnRNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBcHBBY3Rpb25zLFxuICAgICAgICBVc2VyQWN0aW9ucyxcbiAgICAgICAgLi4uSU9TX1VUSUxTXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=