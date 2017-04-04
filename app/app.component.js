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
                        var token = FBSDKAccessToken.currentAccessToken().tokenString;
                        _this._store.dispatch(_this._actions.setUser({
                            id: data.user.uid,
                            isLoggedIn: true,
                            email: data.user.email,
                            facebookAccessToken: token
                        }));
                    }
                }
                else {
                    _this._store.dispatch(_this._actions.removeUser());
                }
            }
        }).then(function (instance) {
            console.log("firebase.init done");
        }, function (err) {
            console.log("firebase.error");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQscUNBQW9DO0FBR3BDLGdDQUErQjtBQUcvQixxREFBOEQ7QUFHOUQsdURBQXlEO0FBVXpELElBQWEsWUFBWTtJQUVyQixzQkFBb0IsS0FBVyxFQUNYLE1BQXVCLEVBQ3ZCLFFBQXFCO1FBRnJCLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFhO0lBQUcsQ0FBQztJQUV0QywrQkFBUSxHQUFmO1FBQUEsaUJBdUNDO1FBckNHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDVixrQkFBa0IsRUFBRSxVQUFDLElBQUk7Z0JBRXJCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUVoQixFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUV6QyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7d0JBQzFELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7NEJBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO3dCQUNuRCxDQUFDLENBQUMsQ0FBQztvQkFFUCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUVKLElBQU0sS0FBSyxHQUFHLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNoRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs0QkFDdkMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs0QkFDakIsVUFBVSxFQUFFLElBQUk7NEJBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7NEJBQ3RCLG1CQUFtQixFQUFFLEtBQUs7eUJBQzdCLENBQUMsQ0FBQyxDQUFDO29CQUNSLENBQUM7Z0JBRUwsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFFSixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3JELENBQUM7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFFLFVBQUMsR0FBRztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNZLFlBQVk7SUFOeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSwrRUFFVDtLQUNKLENBQUM7cUNBRzZCLFdBQUk7UUFDSCxhQUFLO1FBQ0gsc0JBQVc7R0FKaEMsWUFBWSxDQThDeEI7QUE5Q1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuL3N0b3JlL2FwcC5zdGF0ZSc7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuXG5pbXBvcnQgeyBBY3Rpb25zIGFzIFVzZXJBY3Rpb25zIH0gZnJvbSAnLi9zdG9yZS91c2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vc3RvcmUvdXNlci5tb2RlbCc7XG5cbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XG5cbmRlY2xhcmUgdmFyIEZCU0RLQWNjZXNzVG9rZW46IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLW1haW5cIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IHJvdz1cIjBcIiBjb2w9XCIwXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hY3Rpb25zOiBVc2VyQWN0aW9ucykge31cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcblxuICAgICAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sb2dnZWRJbikge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghRkJTREtBY2Nlc3NUb2tlbi5jdXJyZW50QWNjZXNzVG9rZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5sb2dvdXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBsb2dnaW5nIG91dCBmcm9tIGZpcmViYXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgbG9nZ2luZyBvdXQgZnJvbSBmaXJlYmFzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gRkJTREtBY2Nlc3NUb2tlbi5jdXJyZW50QWNjZXNzVG9rZW4oKS50b2tlblN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2V0VXNlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGEudXNlci51aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZGF0YS51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhY2Vib29rQWNjZXNzVG9rZW46IHRva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5yZW1vdmVVc2VyKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmVycm9yXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxufSJdfQ==