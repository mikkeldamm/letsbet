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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJ1eWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1idXlpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3RjtBQUN4RiwwQ0FBeUM7QUFFekMsc0RBQStEO0FBRS9ELHlDQUEyQztBQUMzQyx1REFBeUQ7QUFjekQsZ0NBQStCO0FBVS9CLElBQWEsb0JBQW9CO0lBTzdCLDhCQUFvQixLQUFXLEVBQVUsT0FBZSxFQUFVLGlCQUFtQztRQUFyRyxpQkFTQztRQVRtQixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFGOUYscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBSWpDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztRQUUvQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUU7WUFDMUIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDhDQUFlLEdBQXRCO1FBRUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxtQ0FBSSxHQUFYO1FBQUEsaUJBZ0JDO1FBZEcsV0FBVyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxxQ0FBcUMsRUFBRSxVQUFDLFlBQVk7WUFDeEYsSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN0RyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUEwQixDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFWixTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLHdCQUF3QixDQUFDO1lBQzVELFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsMEJBQTBCLENBQUM7WUFDOUQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDTCxDQUFDO0lBRU0sb0NBQUssR0FBWjtRQUVJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLEtBQUssRUFBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQztTQUNyQyxDQUFDLENBQUMsSUFBSSxDQUNILFVBQUMsTUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUNELFVBQUMsWUFBWTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUlQOzs7Ozs7O1VBT0U7SUFDTixDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLEFBbkVELElBbUVDO0FBakUrQjtJQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQzs4QkFBZ0IsaUJBQVU7MkRBQUM7QUFDdEI7SUFBL0IsZ0JBQVMsQ0FBQyxtQkFBbUIsQ0FBQzs4QkFBb0IsaUJBQVU7K0RBQUM7QUFIckQsb0JBQW9CO0lBTmhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLCtCQUErQjtRQUM1QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztLQUMzQyxDQUFDO3FDQVE2QixXQUFJLEVBQW1CLGVBQU0sRUFBNkIseUJBQWdCO0dBUDVGLG9CQUFvQixDQW1FaEM7QUFuRVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcblxuZGVjbGFyZSB2YXIgVUlLZXlib2FyZFdpbGxDaGFuZ2VGcmFtZU5vdGlmaWNhdGlvbjogYW55O1xuZGVjbGFyZSB2YXIgVUlLZXlib2FyZEZyYW1lRW5kVXNlckluZm9LZXk6IGFueTtcbmRlY2xhcmUgdmFyIFVJS2V5Ym9hcmRBcHBlYXJhbmNlRGFyazogYW55O1xuZGVjbGFyZSB2YXIgVUlUZXh0QXV0b2NvcnJlY3Rpb25UeXBlTm86IGFueTtcbmRlY2xhcmUgdmFyIFVJVmlldzogYW55O1xuXG5kZWNsYXJlIGNvbnN0IE5TQXR0cmlidXRlZFN0cmluZzogYW55O1xuZGVjbGFyZSBjb25zdCBOU0RpY3Rpb25hcnk6IGFueTtcbmRlY2xhcmUgY29uc3QgTlNGb3JlZ3JvdW5kQ29sb3JBdHRyaWJ1dGVOYW1lOiBhbnk7XG5cbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgaU9TQXBwbGljYXRpb24gfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiY3JlYXRlLWJ1eWluXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS1idXlpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9jcmVhdGUtYnV5aW4tY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVCdXlpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQFZpZXdDaGlsZChcInRleHRDb250YWluZXJcIikgdGV4dENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGV4dFB1c2hDb250YWluZXJcIikgdGV4dFB1c2hDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgYnV5aW5EZXNjcmlwdGlvbjogc3RyaW5nID0gXCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG5cbiAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYWdlLmVuYWJsZVN3aXBlQmFja05hdmlnYXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9wYWdlLm9uKFwibmF2aWdhdGluZ1RvXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGVzdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIHRoaXMudGVzdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0ZXN0KCkge1xuXG4gICAgICAgIGFwcGxpY2F0aW9uLmlvcy5hZGROb3RpZmljYXRpb25PYnNlcnZlcihVSUtleWJvYXJkV2lsbENoYW5nZUZyYW1lTm90aWZpY2F0aW9uLCAobm90aWZpY2F0aW9uKSA9PiB7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gbm90aWZpY2F0aW9uLnVzZXJJbmZvLnZhbHVlRm9yS2V5KFVJS2V5Ym9hcmRGcmFtZUVuZFVzZXJJbmZvS2V5KS5DR1JlY3RWYWx1ZS5zaXplLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSEVJR0hUOiBcIiArIGhlaWdodCArIFwicHhcIik7XG4gICAgICAgICAgICB0aGlzLnRleHRQdXNoQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSB0aGlzLnRleHRDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBUZXh0RmllbGQ7XG4gICAgICAgIGlmICh0ZXh0RmllbGQpIHtcblxuICAgICAgICAgICAgdGV4dEZpZWxkLmlvcy5rZXlib2FyZEFwcGVhcmFuY2UgPSBVSUtleWJvYXJkQXBwZWFyYW5jZURhcms7XG4gICAgICAgICAgICB0ZXh0RmllbGQuaW9zLmF1dG9jb3JyZWN0aW9uVHlwZSA9IFVJVGV4dEF1dG9jb3JyZWN0aW9uVHlwZU5vO1xuICAgICAgICAgICAgdGV4dEZpZWxkLmlvcy5pbnB1dEFjY2Vzc29yeVZpZXcgPSBVSVZpZXcuYWxsb2MoKS5pbml0KCk7XG4gICAgICAgICAgICB0ZXh0RmllbGQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcCgpIHtcblxuICAgICAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuRkFDRUJPT0ssXG4gICAgICAgICAgICBzY29wZTogWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddXG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBPSzogXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIEVycm9yOiBcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIFxuXG4gICAgICAgIC8qXG4gICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IHRoaXMudGV4dENvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIFRleHRGaWVsZDtcbiAgICAgICAgaWYgKHRleHRGaWVsZCkge1xuICAgICAgICAgICAgLy90ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NyZWF0ZS1iZXRcIl0pO1xuICAgICAgICAqL1xuICAgIH1cbn0iXX0=