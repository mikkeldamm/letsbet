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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQscUNBQW9DO0FBR3BDLGdDQUErQjtBQUcvQixxREFBOEQ7QUFHOUQseUNBQTJDO0FBQzNDLHVEQUF5RDtBQUN6RCxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFVcEUsSUFBYSxZQUFZO0lBRXJCLHNCQUFvQixLQUFXLEVBQ1gsTUFBdUIsRUFDdkIsUUFBcUI7UUFGckIsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWE7SUFBRyxDQUFDO0lBRXRDLCtCQUFRLEdBQWY7UUFBQSxpQkF3REM7UUF0REcsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEIsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFVBQVUsSUFBc0M7Z0JBRXBGLFlBQVksQ0FBQyxvRkFBb0YsQ0FDN0YsSUFBSSxDQUFDLEdBQUcsRUFDUixzQ0FBc0MsRUFDdEMsVUFBQyxDQUFDO29CQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDLEVBQ0QsVUFBQyxDQUFDO29CQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDLEVBQ0QsSUFBSSxDQUNQLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1Ysa0JBQWtCLEVBQUUsVUFBQyxJQUFJO2dCQUVyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFFaEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFFekMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQzs0QkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO3dCQUMxRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHOzRCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQzt3QkFDbkQsQ0FBQyxDQUFDLENBQUM7b0JBRVAsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFFSixJQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDaEUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7NEJBQ3ZDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7NEJBQ2pCLFVBQVUsRUFBRSxJQUFJOzRCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLOzRCQUN0QixtQkFBbUIsRUFBRSxLQUFLO3lCQUM3QixDQUFDLENBQUMsQ0FBQztvQkFDUixDQUFDO2dCQUVMLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBRUosS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxVQUFDLEdBQUc7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQS9ERCxJQStEQztBQS9EWSxZQUFZO0lBTnhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsK0VBRVQ7S0FDSixDQUFDO3FDQUc2QixXQUFJO1FBQ0gsYUFBSztRQUNILHNCQUFXO0dBSmhDLFlBQVksQ0ErRHhCO0FBL0RZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi9zdG9yZS9hcHAuc3RhdGUnO1xuXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcblxuaW1wb3J0IHsgQWN0aW9ucyBhcyBVc2VyQWN0aW9ucyB9IGZyb20gJy4vc3RvcmUvdXNlci5hY3Rpb25zJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3N0b3JlL3VzZXIubW9kZWwnO1xuXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XG5jb25zdCBUbnNPbmVTaWduYWwgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtb25lc2lnbmFsJykuVG5zT25lU2lnbmFsO1xuXG5kZWNsYXJlIHZhciBGQlNES0FjY2Vzc1Rva2VuOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1tYWluXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHBhZ2Utcm91dGVyLW91dGxldCByb3c9XCIwXCIgY29sPVwiMFwiPjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UsIFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3N0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYWN0aW9uczogVXNlckFjdGlvbnMpIHt9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uLmlvcykge1xuICAgICAgICAgICAgYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24ubGF1bmNoRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBhcHBsaWNhdGlvbi5BcHBsaWNhdGlvbkV2ZW50RGF0YSkge1xuXG4gICAgICAgICAgICAgICAgVG5zT25lU2lnbmFsLmluaXRXaXRoTGF1bmNoT3B0aW9uc0FwcElkSGFuZGxlTm90aWZpY2F0aW9uUmVjZWl2ZWRIYW5kbGVOb3RpZmljYXRpb25BY3Rpb25TZXR0aW5ncyhcbiAgICAgICAgICAgICAgICAgICAgYXJncy5pb3MsXG4gICAgICAgICAgICAgICAgICAgICdiMDc2NTllOS03ODY5LTQzN2QtYmFkZi1kNjJhODc4NDE0YTgnLFxuICAgICAgICAgICAgICAgICAgICAoYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gcmVjZWl2ZWRcIiwgSlNPTi5zdHJpbmdpZnkoYSkpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gYWN0aW9uXCIsIEpTT04uc3RyaW5naWZ5KGIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxvZ2dlZEluKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFGQlNES0FjY2Vzc1Rva2VuLmN1cnJlbnRBY2Nlc3NUb2tlbigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmxvZ291dCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGxvZ2dpbmcgb3V0IGZyb20gZmlyZWJhc2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBsb2dnaW5nIG91dCBmcm9tIGZpcmViYXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBGQlNES0FjY2Vzc1Rva2VuLmN1cnJlbnRBY2Nlc3NUb2tlbigpLnRva2VuU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZXRVc2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZGF0YS51c2VyLnVpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBkYXRhLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjZWJvb2tBY2Nlc3NUb2tlbjogdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnJlbW92ZVVzZXIoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuZXJyb3JcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3BhZ2UuYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhciA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG59Il19