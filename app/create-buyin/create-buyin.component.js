"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var application = require("application");
var firebase = require("nativescript-plugin-firebase");
var page_1 = require("ui/page");
var CreateBuyinComponent = (function () {
    function CreateBuyinComponent(_page, _router, _routerExtensions) {
        var _this = this;
        this._page = _page;
        this._router = _router;
        this._routerExtensions = _routerExtensions;
        this.buyinDescription = "";
        this._page.actionBarHidden = true;
        this._page.enableSwipeBackNavigation = false;
        this._page.backgroundSpanUnderStatusBar = true;
        this._page.on("navigatingTo", function () {
            _this.test();
        });
    }
    CreateBuyinComponent.prototype.ngAfterViewInit = function () {
        this.test();
    };
    CreateBuyinComponent.prototype.test = function () {
        var _this = this;
        application.ios.addNotificationObserver(UIKeyboardWillChangeFrameNotification, function (notification) {
            var height = notification.userInfo.valueForKey(UIKeyboardFrameEndUserInfoKey).CGRectValue.size.height;
            console.log("HEIGHT: " + height + "px");
            _this.textPushContainer.nativeElement.height = height;
        });
        var textField = this.textContainer.nativeElement;
        if (textField) {
            textField.ios.keyboardAppearance = UIKeyboardAppearanceDark;
            textField.ios.autocorrectionType = UITextAutocorrectionTypeNo;
            textField.ios.inputAccessoryView = UIView.alloc().init();
            textField.focus();
        }
    };
    CreateBuyinComponent.prototype.onTap = function () {
        firebase.init({
            onAuthStateChanged: function (data) {
                console.log((data.loggedIn ? "Logged in to firebase" : "Logged out from firebase") + " (init's onAuthStateChanged callback)");
            }
        }).then(function (instance) {
            console.log("firebase.init done");
            firebase.push('/lars', { name: 'Søren damm', age: 26 });
            firebase.login({
                type: firebase.LoginType.FACEBOOK,
                scope: ['public_profile', 'email']
            }).then(function (result) {
                console.log("Login OK: ");
                console.log(JSON.stringify(result));
            }, function (errorMessage) {
                console.log("Login Error: ");
                console.log(errorMessage);
            });
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
        /*
        const textField = this.textContainer.nativeElement as TextField;
        if (textField) {
            //textField.dismissSoftInput();
        }
                
        this._routerExtensions.navigate(["/create-bet"]);
        */
    };
    return CreateBuyinComponent;
}());
__decorate([
    core_1.ViewChild("textContainer"),
    __metadata("design:type", core_1.ElementRef)
], CreateBuyinComponent.prototype, "textContainer", void 0);
__decorate([
    core_1.ViewChild("textPushContainer"),
    __metadata("design:type", core_1.ElementRef)
], CreateBuyinComponent.prototype, "textPushContainer", void 0);
CreateBuyinComponent = __decorate([
    core_1.Component({
        selector: "create-buyin",
        moduleId: module.id,
        templateUrl: "./create-buyin.component.html",
        styleUrls: ["./create-buyin-common.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.Router, router_2.RouterExtensions])
], CreateBuyinComponent);
exports.CreateBuyinComponent = CreateBuyinComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJ1eWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1idXlpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3RjtBQUN4RiwwQ0FBeUM7QUFFekMsc0RBQStEO0FBRS9ELHlDQUEyQztBQUMzQyx1REFBeUQ7QUFjekQsZ0NBQStCO0FBVS9CLElBQWEsb0JBQW9CO0lBTzdCLDhCQUFvQixLQUFXLEVBQVUsT0FBZSxFQUFVLGlCQUFtQztRQUFyRyxpQkFTQztRQVRtQixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFGOUYscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBSWpDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztRQUUvQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUU7WUFDMUIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDhDQUFlLEdBQXRCO1FBRUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxtQ0FBSSxHQUFYO1FBQUEsaUJBZ0JDO1FBZEcsV0FBVyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxxQ0FBcUMsRUFBRSxVQUFDLFlBQVk7WUFDeEYsSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN0RyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUEwQixDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFWixTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLHdCQUF3QixDQUFDO1lBQzVELFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsMEJBQTBCLENBQUM7WUFDOUQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDTCxDQUFDO0lBRU0sb0NBQUssR0FBWjtRQUVJLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDTixrQkFBa0IsRUFBRSxVQUFTLElBQUk7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixHQUFHLDBCQUEwQixDQUFDLEdBQUcsdUNBQXVDLENBQUMsQ0FBQztZQUNsSSxDQUFDO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFDLFFBQVE7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFFbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBRXZELFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtnQkFDakMsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDO2FBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQyxNQUFNO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsRUFDRCxVQUFDLFlBQVk7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBSVg7Ozs7Ozs7VUFPRTtJQUNOLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFqRkQsSUFpRkM7QUEvRStCO0lBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDOzhCQUFnQixpQkFBVTsyREFBQztBQUN0QjtJQUEvQixnQkFBUyxDQUFDLG1CQUFtQixDQUFDOzhCQUFvQixpQkFBVTsrREFBQztBQUhyRCxvQkFBb0I7SUFOaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsK0JBQStCO1FBQzVDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO0tBQzNDLENBQUM7cUNBUTZCLFdBQUksRUFBbUIsZUFBTSxFQUE2Qix5QkFBZ0I7R0FQNUYsb0JBQW9CLENBaUZoQztBQWpGWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xuXG5kZWNsYXJlIHZhciBVSUtleWJvYXJkV2lsbENoYW5nZUZyYW1lTm90aWZpY2F0aW9uOiBhbnk7XG5kZWNsYXJlIHZhciBVSUtleWJvYXJkRnJhbWVFbmRVc2VySW5mb0tleTogYW55O1xuZGVjbGFyZSB2YXIgVUlLZXlib2FyZEFwcGVhcmFuY2VEYXJrOiBhbnk7XG5kZWNsYXJlIHZhciBVSVRleHRBdXRvY29ycmVjdGlvblR5cGVObzogYW55O1xuZGVjbGFyZSB2YXIgVUlWaWV3OiBhbnk7XG5cbmRlY2xhcmUgY29uc3QgTlNBdHRyaWJ1dGVkU3RyaW5nOiBhbnk7XG5kZWNsYXJlIGNvbnN0IE5TRGljdGlvbmFyeTogYW55O1xuZGVjbGFyZSBjb25zdCBOU0ZvcmVncm91bmRDb2xvckF0dHJpYnV0ZU5hbWU6IGFueTtcblxuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBpT1NBcHBsaWNhdGlvbiB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjcmVhdGUtYnV5aW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY3JlYXRlLWJ1eWluLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2NyZWF0ZS1idXlpbi1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUJ1eWluQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKFwidGV4dENvbnRhaW5lclwiKSB0ZXh0Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJ0ZXh0UHVzaENvbnRhaW5lclwiKSB0ZXh0UHVzaENvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBidXlpbkRlc2NyaXB0aW9uOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcblxuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BhZ2UuZW5hYmxlU3dpcGVCYWNrTmF2aWdhdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3BhZ2Uub24oXCJuYXZpZ2F0aW5nVG9cIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50ZXN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICAgICAgdGhpcy50ZXN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRlc3QoKSB7XG5cbiAgICAgICAgYXBwbGljYXRpb24uaW9zLmFkZE5vdGlmaWNhdGlvbk9ic2VydmVyKFVJS2V5Ym9hcmRXaWxsQ2hhbmdlRnJhbWVOb3RpZmljYXRpb24sIChub3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBub3RpZmljYXRpb24udXNlckluZm8udmFsdWVGb3JLZXkoVUlLZXlib2FyZEZyYW1lRW5kVXNlckluZm9LZXkpLkNHUmVjdFZhbHVlLnNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIRUlHSFQ6IFwiICsgaGVpZ2h0ICsgXCJweFwiKTtcbiAgICAgICAgICAgIHRoaXMudGV4dFB1c2hDb250YWluZXIubmF0aXZlRWxlbWVudC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IHRoaXMudGV4dENvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIFRleHRGaWVsZDtcbiAgICAgICAgaWYgKHRleHRGaWVsZCkge1xuXG4gICAgICAgICAgICB0ZXh0RmllbGQuaW9zLmtleWJvYXJkQXBwZWFyYW5jZSA9IFVJS2V5Ym9hcmRBcHBlYXJhbmNlRGFyaztcbiAgICAgICAgICAgIHRleHRGaWVsZC5pb3MuYXV0b2NvcnJlY3Rpb25UeXBlID0gVUlUZXh0QXV0b2NvcnJlY3Rpb25UeXBlTm87XG4gICAgICAgICAgICB0ZXh0RmllbGQuaW9zLmlucHV0QWNjZXNzb3J5VmlldyA9IFVJVmlldy5hbGxvYygpLmluaXQoKTtcbiAgICAgICAgICAgIHRleHRGaWVsZC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwKCkge1xuXG4gICAgICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oZGF0YSkgeyAvLyBvcHRpb25hbFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygoZGF0YS5sb2dnZWRJbiA/IFwiTG9nZ2VkIGluIHRvIGZpcmViYXNlXCIgOiBcIkxvZ2dlZCBvdXQgZnJvbSBmaXJlYmFzZVwiKSArIFwiIChpbml0J3Mgb25BdXRoU3RhdGVDaGFuZ2VkIGNhbGxiYWNrKVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5wdXNoKCcvbGFycycsIHsgbmFtZTogJ1PDuHJlbiBkYW1tJywgYWdlOiAyNn0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5GQUNFQk9PSyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJ11cbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIE9LOiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gRXJyb3I6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBcblxuICAgICAgICAvKlxuICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSB0aGlzLnRleHRDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBUZXh0RmllbGQ7XG4gICAgICAgIGlmICh0ZXh0RmllbGQpIHtcbiAgICAgICAgICAgIC8vdGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jcmVhdGUtYmV0XCJdKTtcbiAgICAgICAgKi9cbiAgICB9XG59Il19