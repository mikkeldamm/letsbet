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
            login_module_1.LoginModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMscUNBQTBDO0FBRTFDLGdGQUE4RTtBQUM5RSxrREFBbUU7QUFDbkUsc0RBQXVFO0FBRXZFLHFEQUFtRDtBQUNuRCxtREFBNEQ7QUFDNUQscURBQThEO0FBRTlELHVDQUEwQztBQUUxQyxpREFBd0Q7QUFFeEQsMkNBQXdEO0FBQ3hELGlEQUErQztBQUUvQyxvRUFBaUU7QUFDakUsMEVBQXVFO0FBQ3ZFLHFEQUFtRDtBQUVuRCwrQkFBa0IsRUFBRSxDQUFDO0FBeUJyQixJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUF2QnJCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQiw2QkFBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxzQkFBUyxDQUFDO1lBQzNDLG1CQUFXLENBQUMsWUFBWSxDQUFDLDBCQUFXLENBQUM7WUFDckMsbUNBQWU7WUFDZix1Q0FBaUI7WUFDakIsMEJBQVc7U0FDZDtRQUNELFNBQVM7WUFDTCxxQkFBVTtZQUNWLHNCQUFXO2lCQUNSLGlCQUFTLENBQ2Y7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtTQUNmO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgcm9vdFJlZHVjZXIgfSBmcm9tICcuL3N0b3JlL3Jvb3QucmVkdWNlcic7XG5pbXBvcnQgeyBBY3Rpb25zIGFzIEFwcEFjdGlvbnMgfSBmcm9tICcuL3N0b3JlL2FwcC5hY3Rpb25zJztcbmltcG9ydCB7IEFjdGlvbnMgYXMgVXNlckFjdGlvbnMgfSBmcm9tICcuL3N0b3JlL3VzZXIuYWN0aW9ucyc7XG5cbmltcG9ydCB7IElPU19VVElMUyB9IGZyb20gJy4vdXRpbHMvaW5kZXgnO1xuXG5pbXBvcnQgeyBzZXRTdGF0dXNCYXJDb2xvcnMgfSBmcm9tIFwiLi91dGlscy9zdGF0dXMtYmFyXCI7XG5cbmltcG9ydCB7IGF1dGhQcm92aWRlcnMsIGFwcFJvdXRlcyB9IGZyb20gXCIuL2FwcC5yb3V0ZXNcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgQ3JlYXRlQmV0TW9kdWxlIH0gZnJvbSBcIi4vY3JlYXRlLWJldC9jcmVhdGUtYmV0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQ3JlYXRlQnV5aW5Nb2R1bGUgfSBmcm9tIFwiLi9jcmVhdGUtYnV5aW4vY3JlYXRlLWJ1eWluLm1vZHVsZVwiO1xuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5tb2R1bGVcIjtcblxuc2V0U3RhdHVzQmFyQ29sb3JzKCk7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSxcbiAgICAgICAgU3RvcmVNb2R1bGUucHJvdmlkZVN0b3JlKHJvb3RSZWR1Y2VyKSxcbiAgICAgICAgQ3JlYXRlQmV0TW9kdWxlLFxuICAgICAgICBDcmVhdGVCdXlpbk1vZHVsZSxcbiAgICAgICAgTG9naW5Nb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBcHBBY3Rpb25zLFxuICAgICAgICBVc2VyQWN0aW9ucyxcbiAgICAgICAgLi4uSU9TX1VUSUxTXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=