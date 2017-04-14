"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
var root_reducer_1 = require("./store/root.reducer");
var app_actions_1 = require("./store/app.actions");
var user_actions_1 = require("./store/user.actions");
var user_effects_1 = require("./store/user.effects");
var bet_effects_1 = require("./store/bet.effects");
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
            forms_1.NativeScriptFormsModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routes_1.appRoutes),
            store_1.StoreModule.provideStore(root_reducer_1.rootReducer),
            effects_1.EffectsModule.run(user_effects_1.UserEffects),
            effects_1.EffectsModule.run(bet_effects_1.BetEffects),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMscUNBQTBDO0FBQzFDLHlDQUE4QztBQUU5QyxnRkFBOEU7QUFDOUUsa0RBQW1FO0FBQ25FLG9EQUFxRTtBQUNyRSxzREFBdUU7QUFFdkUscURBQW1EO0FBQ25ELG1EQUE0RDtBQUM1RCxxREFBOEQ7QUFDOUQscURBQW1EO0FBQ25ELG1EQUFpRDtBQUVqRCx1Q0FBMEM7QUFFMUMsaURBQXdEO0FBRXhELDJDQUF3RDtBQUN4RCxpREFBK0M7QUFFL0Msb0VBQWlFO0FBQ2pFLDBFQUF1RTtBQUN2RSxxREFBbUQ7QUFDbkQsbUZBQWdGO0FBRWhGLCtCQUFrQixFQUFFLENBQUM7QUE2QnJCLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQTNCckIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDZCQUFzQjtZQUN0QiwrQkFBdUI7WUFDdkIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxzQkFBUyxDQUFDO1lBQzNDLG1CQUFXLENBQUMsWUFBWSxDQUFDLDBCQUFXLENBQUM7WUFDckMsdUJBQWEsQ0FBQyxHQUFHLENBQUMsMEJBQVcsQ0FBQztZQUM5Qix1QkFBYSxDQUFDLEdBQUcsQ0FBQyx3QkFBVSxDQUFDO1lBQzdCLG1DQUFlO1lBQ2YsdUNBQWlCO1lBQ2pCLDBCQUFXO1lBQ1gsNkNBQW9CO1NBQ3ZCO1FBQ0QsU0FBUztZQUNMLHFCQUFVO1lBQ1Ysc0JBQVc7aUJBQ1IsaUJBQVMsQ0FDZjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgcm9vdFJlZHVjZXIgfSBmcm9tICcuL3N0b3JlL3Jvb3QucmVkdWNlcic7XG5pbXBvcnQgeyBBY3Rpb25zIGFzIEFwcEFjdGlvbnMgfSBmcm9tICcuL3N0b3JlL2FwcC5hY3Rpb25zJztcbmltcG9ydCB7IEFjdGlvbnMgYXMgVXNlckFjdGlvbnMgfSBmcm9tICcuL3N0b3JlL3VzZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBVc2VyRWZmZWN0cyB9IGZyb20gJy4vc3RvcmUvdXNlci5lZmZlY3RzJztcbmltcG9ydCB7IEJldEVmZmVjdHMgfSBmcm9tICcuL3N0b3JlL2JldC5lZmZlY3RzJztcblxuaW1wb3J0IHsgSU9TX1VUSUxTIH0gZnJvbSAnLi91dGlscy9pbmRleCc7XG5cbmltcG9ydCB7IHNldFN0YXR1c0JhckNvbG9ycyB9IGZyb20gXCIuL3V0aWxzL3N0YXR1cy1iYXJcIjtcblxuaW1wb3J0IHsgYXV0aFByb3ZpZGVycywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLnJvdXRlc1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBDcmVhdGVCZXRNb2R1bGUgfSBmcm9tIFwiLi9jcmVhdGUtYmV0L2NyZWF0ZS1iZXQubW9kdWxlXCI7XG5pbXBvcnQgeyBDcmVhdGVCdXlpbk1vZHVsZSB9IGZyb20gXCIuL2NyZWF0ZS1idXlpbi9jcmVhdGUtYnV5aW4ubW9kdWxlXCI7XG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ3JlYXRlT3Bwb25lbnRNb2R1bGUgfSBmcm9tIFwiLi9jcmVhdGUtb3Bwb25lbnQvY3JlYXRlLW9wcG9uZW50Lm1vZHVsZVwiO1xuXG5zZXRTdGF0dXNCYXJDb2xvcnMoKTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSxcbiAgICAgICAgU3RvcmVNb2R1bGUucHJvdmlkZVN0b3JlKHJvb3RSZWR1Y2VyKSxcbiAgICAgICAgRWZmZWN0c01vZHVsZS5ydW4oVXNlckVmZmVjdHMpLFxuICAgICAgICBFZmZlY3RzTW9kdWxlLnJ1bihCZXRFZmZlY3RzKSxcbiAgICAgICAgQ3JlYXRlQmV0TW9kdWxlLFxuICAgICAgICBDcmVhdGVCdXlpbk1vZHVsZSxcbiAgICAgICAgTG9naW5Nb2R1bGUsXG4gICAgICAgIENyZWF0ZU9wcG9uZW50TW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXBwQWN0aW9ucyxcbiAgICAgICAgVXNlckFjdGlvbnMsXG4gICAgICAgIC4uLklPU19VVElMU1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19