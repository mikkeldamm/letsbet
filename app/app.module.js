"use strict";
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var root_reducer_1 = require("./store/root.reducer");
var app_actions_1 = require("./store/app.actions");
var index_1 = require("./utils/index");
var status_bar_1 = require("./utils/status-bar");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var create_bet_module_1 = require("./create-bet/create-bet.module");
var create_buyin_module_1 = require("./create-buyin/create-buyin.module");
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
            create_buyin_module_1.CreateBuyinModule
        ],
        providers: [
            app_actions_1.Actions
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUV6QyxxQ0FBMEM7QUFFMUMsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxzREFBdUU7QUFFdkUscURBQW1EO0FBQ25ELG1EQUE4QztBQUU5Qyx1Q0FBMEM7QUFFMUMsaURBQXdEO0FBRXhELDJDQUF3RDtBQUN4RCxpREFBK0M7QUFFL0Msb0VBQWlFO0FBQ2pFLDBFQUF1RTtBQUV2RSwrQkFBa0IsRUFBRSxDQUFDO0FBdUJyQixJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUFyQnJCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQiw2QkFBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxzQkFBUyxDQUFDO1lBQzNDLG1CQUFXLENBQUMsWUFBWSxDQUFDLDBCQUFXLENBQUM7WUFDckMsbUNBQWU7WUFDZix1Q0FBaUI7U0FDcEI7UUFDRCxTQUFTO1lBQ0wscUJBQU87aUJBQ0osaUJBQVMsQ0FDZjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyByb290UmVkdWNlciB9IGZyb20gJy4vc3RvcmUvcm9vdC5yZWR1Y2VyJztcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICcuL3N0b3JlL2FwcC5hY3Rpb25zJztcblxuaW1wb3J0IHsgSU9TX1VUSUxTIH0gZnJvbSAnLi91dGlscy9pbmRleCc7XG5cbmltcG9ydCB7IHNldFN0YXR1c0JhckNvbG9ycyB9IGZyb20gXCIuL3V0aWxzL3N0YXR1cy1iYXJcIjtcblxuaW1wb3J0IHsgYXV0aFByb3ZpZGVycywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLnJvdXRlc1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBDcmVhdGVCZXRNb2R1bGUgfSBmcm9tIFwiLi9jcmVhdGUtYmV0L2NyZWF0ZS1iZXQubW9kdWxlXCI7XG5pbXBvcnQgeyBDcmVhdGVCdXlpbk1vZHVsZSB9IGZyb20gXCIuL2NyZWF0ZS1idXlpbi9jcmVhdGUtYnV5aW4ubW9kdWxlXCI7XG5cbnNldFN0YXR1c0JhckNvbG9ycygpO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyksXG4gICAgICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZShyb290UmVkdWNlciksXG4gICAgICAgIENyZWF0ZUJldE1vZHVsZSxcbiAgICAgICAgQ3JlYXRlQnV5aW5Nb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBY3Rpb25zLFxuICAgICAgICAuLi5JT1NfVVRJTFNcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==