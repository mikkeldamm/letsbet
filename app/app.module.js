"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var root_reducer_1 = require("./store/root.reducer");
var app_actions_1 = require("./store/app.actions");
var user_actions_1 = require("./store/user.actions");
var user_effects_1 = require("./store/user.effects");
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
            effects_1.EffectsModule.run(user_effects_1.UserEffects),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMscUNBQTBDO0FBQzFDLHlDQUE4QztBQUU5QyxnRkFBOEU7QUFDOUUsa0RBQW1FO0FBQ25FLHNEQUF1RTtBQUV2RSxxREFBbUQ7QUFDbkQsbURBQTREO0FBQzVELHFEQUE4RDtBQUM5RCxxREFBbUQ7QUFFbkQsdUNBQTBDO0FBRTFDLGlEQUF3RDtBQUV4RCwyQ0FBd0Q7QUFDeEQsaURBQStDO0FBRS9DLG9FQUFpRTtBQUNqRSwwRUFBdUU7QUFDdkUscURBQW1EO0FBQ25ELG1GQUFnRjtBQUVoRiwrQkFBa0IsRUFBRSxDQUFDO0FBMkJyQixJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUF6QnJCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQiw2QkFBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxzQkFBUyxDQUFDO1lBQzNDLG1CQUFXLENBQUMsWUFBWSxDQUFDLDBCQUFXLENBQUM7WUFDckMsdUJBQWEsQ0FBQyxHQUFHLENBQUMsMEJBQVcsQ0FBQztZQUM5QixtQ0FBZTtZQUNmLHVDQUFpQjtZQUNqQiwwQkFBVztZQUNYLDZDQUFvQjtTQUN2QjtRQUNELFNBQVM7WUFDTCxxQkFBVTtZQUNWLHNCQUFXO2lCQUNSLGlCQUFTLENBQ2Y7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtTQUNmO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgcm9vdFJlZHVjZXIgfSBmcm9tICcuL3N0b3JlL3Jvb3QucmVkdWNlcic7XG5pbXBvcnQgeyBBY3Rpb25zIGFzIEFwcEFjdGlvbnMgfSBmcm9tICcuL3N0b3JlL2FwcC5hY3Rpb25zJztcbmltcG9ydCB7IEFjdGlvbnMgYXMgVXNlckFjdGlvbnMgfSBmcm9tICcuL3N0b3JlL3VzZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBVc2VyRWZmZWN0cyB9IGZyb20gJy4vc3RvcmUvdXNlci5lZmZlY3RzJztcblxuaW1wb3J0IHsgSU9TX1VUSUxTIH0gZnJvbSAnLi91dGlscy9pbmRleCc7XG5cbmltcG9ydCB7IHNldFN0YXR1c0JhckNvbG9ycyB9IGZyb20gXCIuL3V0aWxzL3N0YXR1cy1iYXJcIjtcblxuaW1wb3J0IHsgYXV0aFByb3ZpZGVycywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLnJvdXRlc1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBDcmVhdGVCZXRNb2R1bGUgfSBmcm9tIFwiLi9jcmVhdGUtYmV0L2NyZWF0ZS1iZXQubW9kdWxlXCI7XG5pbXBvcnQgeyBDcmVhdGVCdXlpbk1vZHVsZSB9IGZyb20gXCIuL2NyZWF0ZS1idXlpbi9jcmVhdGUtYnV5aW4ubW9kdWxlXCI7XG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ3JlYXRlT3Bwb25lbnRNb2R1bGUgfSBmcm9tIFwiLi9jcmVhdGUtb3Bwb25lbnQvY3JlYXRlLW9wcG9uZW50Lm1vZHVsZVwiO1xuXG5zZXRTdGF0dXNCYXJDb2xvcnMoKTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpLFxuICAgICAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUocm9vdFJlZHVjZXIpLFxuICAgICAgICBFZmZlY3RzTW9kdWxlLnJ1bihVc2VyRWZmZWN0cyksXG4gICAgICAgIENyZWF0ZUJldE1vZHVsZSxcbiAgICAgICAgQ3JlYXRlQnV5aW5Nb2R1bGUsXG4gICAgICAgIExvZ2luTW9kdWxlLFxuICAgICAgICBDcmVhdGVPcHBvbmVudE1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFwcEFjdGlvbnMsXG4gICAgICAgIFVzZXJBY3Rpb25zLFxuICAgICAgICAuLi5JT1NfVVRJTFNcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==