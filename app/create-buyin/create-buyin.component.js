"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("@ngrx/store");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var app_actions_1 = require("../store/app.actions");
var keyboard_observer_1 = require("../utils/keyboard-observer");
var CreateBuyinComponent = (function () {
    function CreateBuyinComponent(_page, _router, _route, _store, _actions, _keyboardObserver) {
        this._page = _page;
        this._router = _router;
        this._route = _route;
        this._store = _store;
        this._actions = _actions;
        this._keyboardObserver = _keyboardObserver;
        this.buyinDescription = '';
    }
    CreateBuyinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._page.actionBarHidden = true;
        this._page.enableSwipeBackNavigation = false;
        this._page.backgroundSpanUnderStatusBar = true;
        this._page.on("navigatingTo", function () {
            _this.prepareTextField();
        });
        this._route.params.subscribe(function (params) {
            _this._betId = params['id'];
        });
    };
    CreateBuyinComponent.prototype.ngOnDestroy = function () {
        if (this._keyboardHeightChangeSubscription) {
            this._keyboardHeightChangeSubscription.unsubscribe();
        }
    };
    CreateBuyinComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._keyboardHeightChangeSubscription = this._keyboardObserver.heightChange$().subscribe(function (height) {
            _this.textPushContainer.nativeElement.height = height;
        });
        this.prepareTextField();
    };
    CreateBuyinComponent.prototype.prepareTextField = function () {
        var textField = this.textContainer.nativeElement;
        if (textField) {
            textField.ios.keyboardAppearance = UIKeyboardAppearanceDark;
            textField.ios.autocorrectionType = UITextAutocorrectionTypeNo;
            textField.ios.inputAccessoryView = UIView.alloc().init();
            textField.focus();
        }
    };
    CreateBuyinComponent.prototype.onGoToLogin = function () {
        if (!this._betId) {
            this._router.navigate(["/create-bet"]);
            return;
        }
        this._store.dispatch(this._actions.updateBetWithBuyin(this._betId, this.buyinDescription));
        this._router.navigate(["/login", this._betId]);
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
    __metadata("design:paramtypes", [page_1.Page,
        router_2.RouterExtensions,
        router_1.ActivatedRoute,
        store_1.Store,
        app_actions_1.Actions,
        keyboard_observer_1.KeyboardObserver])
], CreateBuyinComponent);
exports.CreateBuyinComponent = CreateBuyinComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJ1eWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1idXlpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUc7QUFDbkcsMENBQWlEO0FBQ2pELHFDQUFvQztBQUVwQyxzREFBK0Q7QUFHL0QsZ0NBQStCO0FBRy9CLG9EQUErQztBQUkvQyxnRUFBOEQ7QUFZOUQsSUFBYSxvQkFBb0I7SUFVN0IsOEJBQW9CLEtBQVcsRUFDWCxPQUF5QixFQUN6QixNQUFzQixFQUN0QixNQUF1QixFQUN2QixRQUFpQixFQUNqQixpQkFBbUM7UUFMbkMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVZoRCxxQkFBZ0IsR0FBVyxFQUFFLENBQUM7SUFVcUIsQ0FBQztJQUVwRCx1Q0FBUSxHQUFmO1FBQUEsaUJBYUM7UUFYRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7UUFFL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFO1lBQzFCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMvQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwwQ0FBVyxHQUFsQjtRQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pELENBQUM7SUFDTCxDQUFDO0lBRU0sOENBQWUsR0FBdEI7UUFBQSxpQkFPQztRQUxHLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUM3RixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sK0NBQWdCLEdBQXZCO1FBRUksSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUEwQixDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFWixTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLHdCQUF3QixDQUFDO1lBQzVELFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsMEJBQTBCLENBQUM7WUFDOUQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDTCxDQUFDO0lBRU0sMENBQVcsR0FBbEI7UUFFSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLEFBdEVELElBc0VDO0FBcEUrQjtJQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQzs4QkFBZ0IsaUJBQVU7MkRBQUM7QUFDdEI7SUFBL0IsZ0JBQVMsQ0FBQyxtQkFBbUIsQ0FBQzs4QkFBb0IsaUJBQVU7K0RBQUM7QUFIckQsb0JBQW9CO0lBTmhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLCtCQUErQjtRQUM1QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztLQUMzQyxDQUFDO3FDQVc2QixXQUFJO1FBQ0YseUJBQWdCO1FBQ2pCLHVCQUFjO1FBQ2QsYUFBSztRQUNILHFCQUFPO1FBQ0Usb0NBQWdCO0dBZjlDLG9CQUFvQixDQXNFaEM7QUF0RVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYXBwLmFjdGlvbnMnO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9hcHAuc3RhdGUnO1xuaW1wb3J0IHsgQmV0IH0gZnJvbSAnLi4vc3RvcmUvYmV0Lm1vZGVsJztcblxuaW1wb3J0IHsgS2V5Ym9hcmRPYnNlcnZlciB9IGZyb20gJy4uL3V0aWxzL2tleWJvYXJkLW9ic2VydmVyJztcbmltcG9ydCB7IGd1aWRHZW5lcmF0b3IgfSBmcm9tICcuLi91dGlscy9pZC1nZW5lcmF0b3InO1xuXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImNyZWF0ZS1idXlpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jcmVhdGUtYnV5aW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vY3JlYXRlLWJ1eWluLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQnV5aW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKFwidGV4dENvbnRhaW5lclwiKSB0ZXh0Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJ0ZXh0UHVzaENvbnRhaW5lclwiKSB0ZXh0UHVzaENvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBidXlpbkRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcblxuICAgIHByaXZhdGUgX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfYmV0SWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9zdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2FjdGlvbnM6IEFjdGlvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfa2V5Ym9hcmRPYnNlcnZlcjogS2V5Ym9hcmRPYnNlcnZlcikge31cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BhZ2UuZW5hYmxlU3dpcGVCYWNrTmF2aWdhdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3BhZ2Uub24oXCJuYXZpZ2F0aW5nVG9cIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVwYXJlVGV4dEZpZWxkKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2JldElkID0gcGFyYW1zWydpZCddO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlib2FyZEhlaWdodENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgICAgICB0aGlzLl9rZXlib2FyZEhlaWdodENoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuX2tleWJvYXJkT2JzZXJ2ZXIuaGVpZ2h0Q2hhbmdlJCgpLnN1YnNjcmliZSgoaGVpZ2h0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRleHRQdXNoQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZXBhcmVUZXh0RmllbGQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJlcGFyZVRleHRGaWVsZCgpIHtcblxuICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSB0aGlzLnRleHRDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBUZXh0RmllbGQ7XG4gICAgICAgIGlmICh0ZXh0RmllbGQpIHtcblxuICAgICAgICAgICAgdGV4dEZpZWxkLmlvcy5rZXlib2FyZEFwcGVhcmFuY2UgPSBVSUtleWJvYXJkQXBwZWFyYW5jZURhcms7XG4gICAgICAgICAgICB0ZXh0RmllbGQuaW9zLmF1dG9jb3JyZWN0aW9uVHlwZSA9IFVJVGV4dEF1dG9jb3JyZWN0aW9uVHlwZU5vO1xuICAgICAgICAgICAgdGV4dEZpZWxkLmlvcy5pbnB1dEFjY2Vzc29yeVZpZXcgPSBVSVZpZXcuYWxsb2MoKS5pbml0KCk7XG4gICAgICAgICAgICB0ZXh0RmllbGQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkdvVG9Mb2dpbigpIHtcbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5fYmV0SWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvY3JlYXRlLWJldFwiXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnVwZGF0ZUJldFdpdGhCdXlpbih0aGlzLl9iZXRJZCwgdGhpcy5idXlpbkRlc2NyaXB0aW9uKSk7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIiwgdGhpcy5fYmV0SWRdKTtcbiAgICB9XG59XG4iXX0=