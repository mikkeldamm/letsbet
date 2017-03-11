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
            console.log("missing betid from url, so redirects to create page");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJ1eWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1idXlpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUc7QUFDbkcsMENBQWlEO0FBQ2pELHFDQUFvQztBQUVwQyxzREFBK0Q7QUFHL0QsZ0NBQStCO0FBRy9CLG9EQUErQztBQUkvQyxnRUFBOEQ7QUFZOUQsSUFBYSxvQkFBb0I7SUFVN0IsOEJBQW9CLEtBQVcsRUFDWCxPQUF5QixFQUN6QixNQUFzQixFQUN0QixNQUF1QixFQUN2QixRQUFpQixFQUNqQixpQkFBbUM7UUFMbkMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVZoRCxxQkFBZ0IsR0FBVyxFQUFFLENBQUM7SUFVcUIsQ0FBQztJQUVwRCx1Q0FBUSxHQUFmO1FBQUEsaUJBYUM7UUFYRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7UUFFL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFO1lBQzFCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMvQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwwQ0FBVyxHQUFsQjtRQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pELENBQUM7SUFDTCxDQUFDO0lBRU0sOENBQWUsR0FBdEI7UUFBQSxpQkFPQztRQUxHLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUM3RixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sK0NBQWdCLEdBQXZCO1FBRUksSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUEwQixDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFWixTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLHdCQUF3QixDQUFDO1lBQzVELFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsMEJBQTBCLENBQUM7WUFDOUQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDTCxDQUFDO0lBRU0sMENBQVcsR0FBbEI7UUFFSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQXhFRCxJQXdFQztBQXRFK0I7SUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7OEJBQWdCLGlCQUFVOzJEQUFDO0FBQ3RCO0lBQS9CLGdCQUFTLENBQUMsbUJBQW1CLENBQUM7OEJBQW9CLGlCQUFVOytEQUFDO0FBSHJELG9CQUFvQjtJQU5oQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7S0FDM0MsQ0FBQztxQ0FXNkIsV0FBSTtRQUNGLHlCQUFnQjtRQUNqQix1QkFBYztRQUNkLGFBQUs7UUFDSCxxQkFBTztRQUNFLG9DQUFnQjtHQWY5QyxvQkFBb0IsQ0F3RWhDO0FBeEVZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcblxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FwcC5hY3Rpb25zJztcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvYXBwLnN0YXRlJztcbmltcG9ydCB7IEJldCB9IGZyb20gJy4uL3N0b3JlL2FwcC5tb2RlbCc7XG5cbmltcG9ydCB7IEtleWJvYXJkT2JzZXJ2ZXIgfSBmcm9tICcuLi91dGlscy9rZXlib2FyZC1vYnNlcnZlcic7XG5pbXBvcnQgeyBndWlkR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbHMvaWQtZ2VuZXJhdG9yJztcblxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjcmVhdGUtYnV5aW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY3JlYXRlLWJ1eWluLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2NyZWF0ZS1idXlpbi1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUJ1eWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuXG4gICAgQFZpZXdDaGlsZChcInRleHRDb250YWluZXJcIikgdGV4dENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGV4dFB1c2hDb250YWluZXJcIikgdGV4dFB1c2hDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgYnV5aW5EZXNjcmlwdGlvbjogc3RyaW5nID0gJyc7XG5cbiAgICBwcml2YXRlIF9rZXlib2FyZEhlaWdodENoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgX2JldElkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hY3Rpb25zOiBBY3Rpb25zLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2tleWJvYXJkT2JzZXJ2ZXI6IEtleWJvYXJkT2JzZXJ2ZXIpIHt9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYWdlLmVuYWJsZVN3aXBlQmFja05hdmlnYXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9wYWdlLm9uKFwibmF2aWdhdGluZ1RvXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZVRleHRGaWVsZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLl9iZXRJZCA9IHBhcmFtc1snaWQnXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuXG4gICAgICAgIGlmICh0aGlzLl9rZXlib2FyZEhlaWdodENoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fa2V5Ym9hcmRIZWlnaHRDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICAgICAgdGhpcy5fa2V5Ym9hcmRIZWlnaHRDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLl9rZXlib2FyZE9ic2VydmVyLmhlaWdodENoYW5nZSQoKS5zdWJzY3JpYmUoKGhlaWdodCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50ZXh0UHVzaENvbnRhaW5lci5uYXRpdmVFbGVtZW50LmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcmVwYXJlVGV4dEZpZWxkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHByZXBhcmVUZXh0RmllbGQoKSB7XG5cbiAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gdGhpcy50ZXh0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgVGV4dEZpZWxkO1xuICAgICAgICBpZiAodGV4dEZpZWxkKSB7XG5cbiAgICAgICAgICAgIHRleHRGaWVsZC5pb3Mua2V5Ym9hcmRBcHBlYXJhbmNlID0gVUlLZXlib2FyZEFwcGVhcmFuY2VEYXJrO1xuICAgICAgICAgICAgdGV4dEZpZWxkLmlvcy5hdXRvY29ycmVjdGlvblR5cGUgPSBVSVRleHRBdXRvY29ycmVjdGlvblR5cGVObztcbiAgICAgICAgICAgIHRleHRGaWVsZC5pb3MuaW5wdXRBY2Nlc3NvcnlWaWV3ID0gVUlWaWV3LmFsbG9jKCkuaW5pdCgpO1xuICAgICAgICAgICAgdGV4dEZpZWxkLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Hb1RvTG9naW4oKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRoaXMuX2JldElkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1pc3NpbmcgYmV0aWQgZnJvbSB1cmwsIHNvIHJlZGlyZWN0cyB0byBjcmVhdGUgcGFnZVwiKTtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvY3JlYXRlLWJldFwiXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnVwZGF0ZUJldFdpdGhCdXlpbih0aGlzLl9iZXRJZCwgdGhpcy5idXlpbkRlc2NyaXB0aW9uKSk7XG5cbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiLCB0aGlzLl9iZXRJZF0pO1xuICAgIH1cbn1cbiJdfQ==