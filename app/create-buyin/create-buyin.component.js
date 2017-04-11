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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJ1eWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1idXlpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUc7QUFDbkcsMENBQWlEO0FBQ2pELHFDQUFvQztBQUVwQyxzREFBK0Q7QUFHL0QsZ0NBQStCO0FBRy9CLG9EQUErQztBQUkvQyxnRUFBOEQ7QUFXOUQsSUFBYSxvQkFBb0I7SUFVN0IsOEJBQW9CLEtBQVcsRUFDWCxPQUF5QixFQUN6QixNQUFzQixFQUN0QixNQUF1QixFQUN2QixRQUFpQixFQUNqQixpQkFBbUM7UUFMbkMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVZoRCxxQkFBZ0IsR0FBVyxFQUFFLENBQUM7SUFVcUIsQ0FBQztJQUVwRCx1Q0FBUSxHQUFmO1FBQUEsaUJBYUM7UUFYRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7UUFFL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFO1lBQzFCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMvQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwwQ0FBVyxHQUFsQjtRQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pELENBQUM7SUFDTCxDQUFDO0lBRU0sOENBQWUsR0FBdEI7UUFBQSxpQkFPQztRQUxHLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUM3RixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sK0NBQWdCLEdBQXZCO1FBRUksSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUEwQixDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFWixTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLHdCQUF3QixDQUFDO1lBQzVELFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsMEJBQTBCLENBQUM7WUFDOUQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDTCxDQUFDO0lBRU0sMENBQVcsR0FBbEI7UUFFSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLEFBdEVELElBc0VDO0FBcEUrQjtJQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQzs4QkFBZ0IsaUJBQVU7MkRBQUM7QUFDdEI7SUFBL0IsZ0JBQVMsQ0FBQyxtQkFBbUIsQ0FBQzs4QkFBb0IsaUJBQVU7K0RBQUM7QUFIckQsb0JBQW9CO0lBTmhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLCtCQUErQjtRQUM1QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztLQUMzQyxDQUFDO3FDQVc2QixXQUFJO1FBQ0YseUJBQWdCO1FBQ2pCLHVCQUFjO1FBQ2QsYUFBSztRQUNILHFCQUFPO1FBQ0Usb0NBQWdCO0dBZjlDLG9CQUFvQixDQXNFaEM7QUF0RVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYXBwLmFjdGlvbnMnO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9hcHAuc3RhdGUnO1xuaW1wb3J0IHsgQmV0IH0gZnJvbSAnLi4vc3RvcmUvYmV0Lm1vZGVsJztcblxuaW1wb3J0IHsgS2V5Ym9hcmRPYnNlcnZlciB9IGZyb20gJy4uL3V0aWxzL2tleWJvYXJkLW9ic2VydmVyJztcbmltcG9ydCB7IGd1aWRHZW5lcmF0b3IgfSBmcm9tICcuLi91dGlscy9pZC1nZW5lcmF0b3InO1xuXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiY3JlYXRlLWJ1eWluXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS1idXlpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9jcmVhdGUtYnV5aW4tY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVCdXlpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoXCJ0ZXh0Q29udGFpbmVyXCIpIHRleHRDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcInRleHRQdXNoQ29udGFpbmVyXCIpIHRleHRQdXNoQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGJ1eWluRGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xuXG4gICAgcHJpdmF0ZSBfa2V5Ym9hcmRIZWlnaHRDaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIF9iZXRJZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3N0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYWN0aW9uczogQWN0aW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9rZXlib2FyZE9ic2VydmVyOiBLZXlib2FyZE9ic2VydmVyKSB7fVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGFnZS5lbmFibGVTd2lwZUJhY2tOYXZpZ2F0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhZ2UuYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhciA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fcGFnZS5vbihcIm5hdmlnYXRpbmdUb1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVUZXh0RmllbGQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYmV0SWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblxuICAgICAgICBpZiAodGhpcy5fa2V5Ym9hcmRIZWlnaHRDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIHRoaXMuX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5fa2V5Ym9hcmRPYnNlcnZlci5oZWlnaHRDaGFuZ2UkKCkuc3Vic2NyaWJlKChoZWlnaHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGV4dFB1c2hDb250YWluZXIubmF0aXZlRWxlbWVudC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJlcGFyZVRleHRGaWVsZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcmVwYXJlVGV4dEZpZWxkKCkge1xuXG4gICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IHRoaXMudGV4dENvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIFRleHRGaWVsZDtcbiAgICAgICAgaWYgKHRleHRGaWVsZCkge1xuXG4gICAgICAgICAgICB0ZXh0RmllbGQuaW9zLmtleWJvYXJkQXBwZWFyYW5jZSA9IFVJS2V5Ym9hcmRBcHBlYXJhbmNlRGFyaztcbiAgICAgICAgICAgIHRleHRGaWVsZC5pb3MuYXV0b2NvcnJlY3Rpb25UeXBlID0gVUlUZXh0QXV0b2NvcnJlY3Rpb25UeXBlTm87XG4gICAgICAgICAgICB0ZXh0RmllbGQuaW9zLmlucHV0QWNjZXNzb3J5VmlldyA9IFVJVmlldy5hbGxvYygpLmluaXQoKTtcbiAgICAgICAgICAgIHRleHRGaWVsZC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uR29Ub0xvZ2luKCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLl9iZXRJZCkge1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi9jcmVhdGUtYmV0XCJdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMudXBkYXRlQmV0V2l0aEJ1eWluKHRoaXMuX2JldElkLCB0aGlzLmJ1eWluRGVzY3JpcHRpb24pKTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiLCB0aGlzLl9iZXRJZF0pO1xuICAgIH1cbn1cbiJdfQ==