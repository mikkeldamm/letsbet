"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var page_1 = require("ui/page");
var user_actions_1 = require("./store/user.actions");
var firebase = require("nativescript-plugin-firebase");
var AppComponent = (function () {
    function AppComponent(_page, _store, _actions) {
        this._page = _page;
        this._store = _store;
        this._actions = _actions;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase.init({
            onAuthStateChanged: function (data) {
                if (data.loggedIn) {
                    if (!FBSDKAccessToken.currentAccessToken()) {
                        firebase.logout().then(function () {
                            console.log("Successfully logging out from firebase");
                        }).catch(function (err) {
                            console.log("Error logging out from firebase");
                        });
                    }
                    else {
                        console.log("Logged in to firebase");
                        console.log("User: " + JSON.stringify(data.user));
                        var token = FBSDKAccessToken.currentAccessToken().tokenString;
                        console.log("Facebook AccessToken: " + token);
                        _this._store.dispatch(_this._actions.setUser({
                            isLoggedIn: true,
                            email: data.user.email,
                            facebookAccessToken: token
                        }));
                    }
                }
                else {
                    _this._store.dispatch(_this._actions.removeUser());
                    console.log("Logged out from firebase");
                }
            }
        }).then(function (instance) {
            console.log("firebase.init done");
        }, function (err) {
            console.log("firebase.error");
        });
        this._store.select(function (s) { return s; }).subscribe(function (s) {
            if (s.bet.bets.length > 0) {
                console.log("BETS 1: ");
                console.log(s.bet.bets[0].description);
            }
        });
        this._page.backgroundSpanUnderStatusBar = true;
        this._page.actionBarHidden = true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "app-main",
        template: "\n        <page-router-outlet row=\"0\" col=\"0\"></page-router-outlet>\n    "
    }),
    __metadata("design:paramtypes", [page_1.Page,
        store_1.Store,
        user_actions_1.Actions])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQscUNBQW9DO0FBR3BDLGdDQUErQjtBQUcvQixxREFBOEQ7QUFHOUQsdURBQXlEO0FBVXpELElBQWEsWUFBWTtJQUVyQixzQkFBb0IsS0FBVyxFQUNYLE1BQXVCLEVBQ3ZCLFFBQXFCO1FBRnJCLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFhO0lBQUcsQ0FBQztJQUV0QywrQkFBUSxHQUFmO1FBQUEsaUJBbURDO1FBakRHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDVixrQkFBa0IsRUFBRSxVQUFDLElBQUk7Z0JBRXJCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUVoQixFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUV6QyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7d0JBQzFELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7NEJBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO3dCQUNuRCxDQUFDLENBQUMsQ0FBQztvQkFFUCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQzt3QkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFFbEQsSUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7d0JBRTlDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDOzRCQUN2QyxVQUFVLEVBQUUsSUFBSTs0QkFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSzs0QkFDdEIsbUJBQW1CLEVBQUUsS0FBSzt5QkFDN0IsQ0FBQyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztnQkFFTCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUVKLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztvQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxVQUFDLEdBQUc7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBMURELElBMERDO0FBMURZLFlBQVk7SUFOeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSwrRUFFVDtLQUNKLENBQUM7cUNBRzZCLFdBQUk7UUFDSCxhQUFLO1FBQ0gsc0JBQVc7R0FKaEMsWUFBWSxDQTBEeEI7QUExRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuL3N0b3JlL2FwcC5zdGF0ZSc7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuXG5pbXBvcnQgeyBBY3Rpb25zIGFzIFVzZXJBY3Rpb25zIH0gZnJvbSAnLi9zdG9yZS91c2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vc3RvcmUvdXNlci5tb2RlbCc7XG5cbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XG5cbmRlY2xhcmUgdmFyIEZCU0RLQWNjZXNzVG9rZW46IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLW1haW5cIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IHJvdz1cIjBcIiBjb2w9XCIwXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hY3Rpb25zOiBVc2VyQWN0aW9ucykge31cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcblxuICAgICAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sb2dnZWRJbikge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghRkJTREtBY2Nlc3NUb2tlbi5jdXJyZW50QWNjZXNzVG9rZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5sb2dvdXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBsb2dnaW5nIG91dCBmcm9tIGZpcmViYXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgbG9nZ2luZyBvdXQgZnJvbSBmaXJlYmFzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9nZ2VkIGluIHRvIGZpcmViYXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEudXNlcikpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IEZCU0RLQWNjZXNzVG9rZW4uY3VycmVudEFjY2Vzc1Rva2VuKCkudG9rZW5TdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhY2Vib29rIEFjY2Vzc1Rva2VuOiBcIiArIHRva2VuKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZXRVc2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBkYXRhLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjZWJvb2tBY2Nlc3NUb2tlbjogdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnJlbW92ZVVzZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9nZ2VkIG91dCBmcm9tIGZpcmViYXNlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmVycm9yXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9zdG9yZS5zZWxlY3QocyA9PiBzKS5zdWJzY3JpYmUocyA9PiB7IFxuICAgICAgICAgICAgaWYgKHMuYmV0LmJldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQkVUUyAxOiBcIik7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHMuYmV0LmJldHNbMF0uZGVzY3JpcHRpb24pOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fcGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cbn0iXX0=