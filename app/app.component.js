"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var page_1 = require("ui/page");
var user_actions_1 = require("./store/user.actions");
var application = require("application");
var firebase = require("nativescript-plugin-firebase");
var TnsOneSignal = require('nativescript-onesignal').TnsOneSignal;
var AppComponent = (function () {
    function AppComponent(_page, _store, _actions) {
        this._page = _page;
        this._store = _store;
        this._actions = _actions;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (application.ios) {
            application.on(application.launchEvent, function (args) {
                TnsOneSignal.initWithLaunchOptionsAppIdHandleNotificationReceivedHandleNotificationActionSettings(args.ios, 'b07659e9-7869-437d-badf-d62a878414a8', function (a) {
                    console.log("Notification received", JSON.stringify(a));
                }, function (b) {
                    console.log("Notification action", JSON.stringify(b));
                }, null);
            });
        }
        firebase.init({
            onAuthStateChanged: function (data) {
                if (data.loggedIn) {
                    if (!FBSDKAccessToken.currentAccessToken()) {
                        firebase.logout().then(function () {
                            console.log("Successfully logging out from firebase!");
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
            console.log("firebase.init done!");
        }, function (err) {
            console.log("firebase.error", JSON.stringify(err));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQscUNBQW9DO0FBR3BDLGdDQUErQjtBQUcvQixxREFBOEQ7QUFHOUQseUNBQTJDO0FBQzNDLHVEQUF5RDtBQUN6RCxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFVcEUsSUFBYSxZQUFZO0lBRXJCLHNCQUFvQixLQUFXLEVBQ1gsTUFBdUIsRUFDdkIsUUFBcUI7UUFGckIsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWE7SUFBRyxDQUFDO0lBRXRDLCtCQUFRLEdBQWY7UUFBQSxpQkF3REM7UUF0REcsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEIsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFVBQVUsSUFBc0M7Z0JBRXBGLFlBQVksQ0FBQyxvRkFBb0YsQ0FDN0YsSUFBSSxDQUFDLEdBQUcsRUFDUixzQ0FBc0MsRUFDdEMsVUFBQyxDQUFDO29CQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDLEVBQ0QsVUFBQyxDQUFDO29CQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDLEVBQ0QsSUFBSSxDQUNQLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1Ysa0JBQWtCLEVBQUUsVUFBQyxJQUFJO2dCQUVyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFFaEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFFekMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQzs0QkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO3dCQUMzRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHOzRCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQzt3QkFDbkQsQ0FBQyxDQUFDLENBQUM7b0JBRVAsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFFSixJQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDaEUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7NEJBQ3ZDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7NEJBQ2pCLFVBQVUsRUFBRSxJQUFJOzRCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLOzRCQUN0QixtQkFBbUIsRUFBRSxLQUFLO3lCQUM3QixDQUFDLENBQUMsQ0FBQztvQkFDUixDQUFDO2dCQUVMLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBRUosS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBRSxVQUFDLEdBQUc7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBL0RELElBK0RDO0FBL0RZLFlBQVk7SUFOeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSwrRUFFVDtLQUNKLENBQUM7cUNBRzZCLFdBQUk7UUFDSCxhQUFLO1FBQ0gsc0JBQVc7R0FKaEMsWUFBWSxDQStEeEI7QUEvRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuL3N0b3JlL2FwcC5zdGF0ZSc7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuXG5pbXBvcnQgeyBBY3Rpb25zIGFzIFVzZXJBY3Rpb25zIH0gZnJvbSAnLi9zdG9yZS91c2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vc3RvcmUvdXNlci5tb2RlbCc7XG5cbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcbmNvbnN0IFRuc09uZVNpZ25hbCA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1vbmVzaWduYWwnKS5UbnNPbmVTaWduYWw7XG5cbmRlY2xhcmUgdmFyIEZCU0RLQWNjZXNzVG9rZW46IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLW1haW5cIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IHJvdz1cIjBcIiBjb2w9XCIwXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hY3Rpb25zOiBVc2VyQWN0aW9ucykge31cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcblxuICAgICAgICBpZiAoYXBwbGljYXRpb24uaW9zKSB7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5vbihhcHBsaWNhdGlvbi5sYXVuY2hFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IGFwcGxpY2F0aW9uLkFwcGxpY2F0aW9uRXZlbnREYXRhKSB7XG5cbiAgICAgICAgICAgICAgICBUbnNPbmVTaWduYWwuaW5pdFdpdGhMYXVuY2hPcHRpb25zQXBwSWRIYW5kbGVOb3RpZmljYXRpb25SZWNlaXZlZEhhbmRsZU5vdGlmaWNhdGlvbkFjdGlvblNldHRpbmdzKFxuICAgICAgICAgICAgICAgICAgICBhcmdzLmlvcyxcbiAgICAgICAgICAgICAgICAgICAgJ2IwNzY1OWU5LTc4NjktNDM3ZC1iYWRmLWQ2MmE4Nzg0MTRhOCcsXG4gICAgICAgICAgICAgICAgICAgIChhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiByZWNlaXZlZFwiLCBKU09OLnN0cmluZ2lmeShhKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBhY3Rpb25cIiwgSlNPTi5zdHJpbmdpZnkoYikpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlyZWJhc2UuaW5pdCh7XG4gICAgICAgICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQ6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIUZCU0RLQWNjZXNzVG9rZW4uY3VycmVudEFjY2Vzc1Rva2VuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UubG9nb3V0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgbG9nZ2luZyBvdXQgZnJvbSBmaXJlYmFzZSFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBsb2dnaW5nIG91dCBmcm9tIGZpcmViYXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBGQlNES0FjY2Vzc1Rva2VuLmN1cnJlbnRBY2Nlc3NUb2tlbigpLnRva2VuU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZXRVc2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZGF0YS51c2VyLnVpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBkYXRhLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjZWJvb2tBY2Nlc3NUb2tlbjogdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnJlbW92ZVVzZXIoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmUhXCIpO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmVycm9yXCIsIEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxufSJdfQ==