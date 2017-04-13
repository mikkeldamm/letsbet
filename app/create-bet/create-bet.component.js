"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var app_actions_1 = require("../store/app.actions");
var keyboard_observer_1 = require("../utils/keyboard-observer");
var id_generator_1 = require("../utils/id-generator");
var CreateBetComponent = (function () {
    function CreateBetComponent(_page, _router, _store, _actions, _keyboardObserver) {
        this._page = _page;
        this._router = _router;
        this._store = _store;
        this._actions = _actions;
        this._keyboardObserver = _keyboardObserver;
        this.betDescription = "";
    }
    CreateBetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._page.actionBarHidden = true;
        this._page.enableSwipeBackNavigation = false;
        this._page.backgroundSpanUnderStatusBar = true;
        this._page.on("navigatingTo", function () {
            _this.prepareTextField();
        });
    };
    CreateBetComponent.prototype.ngOnDestroy = function () {
        if (this._keyboardHeightChangeSubscription) {
            this._keyboardHeightChangeSubscription.unsubscribe();
        }
    };
    CreateBetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._keyboardHeightChangeSubscription = this._keyboardObserver.heightChange$().subscribe(function (height) {
            _this.textPushContainer.nativeElement.height = height;
        });
        this.prepareTextField();
    };
    CreateBetComponent.prototype.changeDescription = function (description) {
        console.log(description);
        this.betDescription = description;
    };
    CreateBetComponent.prototype.onGoToCreateBuyin = function () {
        var newBet = {
            id: id_generator_1.guidGenerator(),
            description: this.betDescription,
            buyin: null,
            opponentId: null
        };
        this._store.dispatch(this._actions.addBetWithDescription(newBet));
        this._router.navigate(["/create-buyin", newBet.id]);
    };
    CreateBetComponent.prototype.prepareTextField = function () {
        var textField = this.textContainer.nativeElement;
        if (textField) {
            textField.ios.keyboardAppearance = UIKeyboardAppearanceDark;
            textField.ios.autocorrectionType = UITextAutocorrectionTypeNo;
            textField.ios.inputAccessoryView = UIView.alloc().init();
            textField.focus();
        }
    };
    return CreateBetComponent;
}());
__decorate([
    core_1.ViewChild("textContainer"),
    __metadata("design:type", core_1.ElementRef)
], CreateBetComponent.prototype, "textContainer", void 0);
__decorate([
    core_1.ViewChild("textPushContainer"),
    __metadata("design:type", core_1.ElementRef)
], CreateBetComponent.prototype, "textPushContainer", void 0);
CreateBetComponent = __decorate([
    core_1.Component({
        selector: "create-bet",
        moduleId: module.id,
        templateUrl: "./create-bet.component.html",
        styleUrls: ["./create-bet-common.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page,
        router_1.RouterExtensions,
        store_1.Store,
        app_actions_1.Actions,
        keyboard_observer_1.KeyboardObserver])
], CreateBetComponent);
exports.CreateBetComponent = CreateBetComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtYmV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRztBQUNuRyxxQ0FBb0M7QUFFcEMsc0RBQStEO0FBRy9ELGdDQUErQjtBQUcvQixvREFBK0M7QUFJL0MsZ0VBQThEO0FBQzlELHNEQUFzRDtBQVF0RCxJQUFhLGtCQUFrQjtJQVMzQiw0QkFBb0IsS0FBVyxFQUNYLE9BQXlCLEVBQ3pCLE1BQXVCLEVBQ3ZCLFFBQWlCLEVBQ2pCLGlCQUFtQztRQUpuQyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBUmhELG1CQUFjLEdBQVcsRUFBRSxDQUFDO0lBUXVCLENBQUM7SUFFcEQscUNBQVEsR0FBZjtRQUFBLGlCQVNDO1FBUEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO1FBRS9DLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRTtZQUMxQixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pELENBQUM7SUFDTCxDQUFDO0lBRU0sNENBQWUsR0FBdEI7UUFBQSxpQkFPQztRQUxHLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUM3RixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sOENBQWlCLEdBQXhCLFVBQXlCLFdBQW1CO1FBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUVNLDhDQUFpQixHQUF4QjtRQUVJLElBQU0sTUFBTSxHQUFRO1lBQ2hCLEVBQUUsRUFBRSw0QkFBYSxFQUFFO1lBQ25CLFdBQVcsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNoQyxLQUFLLEVBQUUsSUFBSTtZQUNYLFVBQVUsRUFBRSxJQUFJO1NBQ25CLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFFakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVPLDZDQUFnQixHQUF4QjtRQUVJLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBMEIsQ0FBQztRQUNoRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBRVosU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyx3QkFBd0IsQ0FBQztZQUM1RCxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLDBCQUEwQixDQUFDO1lBQzlELFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pELFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixDQUFDO0lBQ0wsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXpFRCxJQXlFQztBQXZFK0I7SUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7OEJBQWdCLGlCQUFVO3lEQUFDO0FBQ3RCO0lBQS9CLGdCQUFTLENBQUMsbUJBQW1CLENBQUM7OEJBQW9CLGlCQUFVOzZEQUFDO0FBSHJELGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FDekMsQ0FBQztxQ0FVNkIsV0FBSTtRQUNGLHlCQUFnQjtRQUNqQixhQUFLO1FBQ0gscUJBQU87UUFDRSxvQ0FBZ0I7R0FiOUMsa0JBQWtCLENBeUU5QjtBQXpFWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5cbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hcHAuYWN0aW9ucyc7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL2FwcC5zdGF0ZSc7XG5pbXBvcnQgeyBCZXQgfSBmcm9tICcuLi9zdG9yZS9iZXQubW9kZWwnO1xuXG5pbXBvcnQgeyBLZXlib2FyZE9ic2VydmVyIH0gZnJvbSAnLi4vdXRpbHMva2V5Ym9hcmQtb2JzZXJ2ZXInO1xuaW1wb3J0IHsgZ3VpZEdlbmVyYXRvciB9IGZyb20gJy4uL3V0aWxzL2lkLWdlbmVyYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImNyZWF0ZS1iZXRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY3JlYXRlLWJldC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9jcmVhdGUtYmV0LWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQmV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuXG4gICAgQFZpZXdDaGlsZChcInRleHRDb250YWluZXJcIikgdGV4dENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGV4dFB1c2hDb250YWluZXJcIikgdGV4dFB1c2hDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgYmV0RGVzY3JpcHRpb246IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwcml2YXRlIF9rZXlib2FyZEhlaWdodENoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hY3Rpb25zOiBBY3Rpb25zLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2tleWJvYXJkT2JzZXJ2ZXI6IEtleWJvYXJkT2JzZXJ2ZXIpIHt9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYWdlLmVuYWJsZVN3aXBlQmFja05hdmlnYXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9wYWdlLm9uKFwibmF2aWdhdGluZ1RvXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZVRleHRGaWVsZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlib2FyZEhlaWdodENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgICAgICB0aGlzLl9rZXlib2FyZEhlaWdodENoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuX2tleWJvYXJkT2JzZXJ2ZXIuaGVpZ2h0Q2hhbmdlJCgpLnN1YnNjcmliZSgoaGVpZ2h0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRleHRQdXNoQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZXBhcmVUZXh0RmllbGQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlRGVzY3JpcHRpb24oZGVzY3JpcHRpb246IHN0cmluZykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5iZXREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkdvVG9DcmVhdGVCdXlpbigpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld0JldDogQmV0ID0ge1xuICAgICAgICAgICAgaWQ6IGd1aWRHZW5lcmF0b3IoKSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmJldERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgYnV5aW46IG51bGwsXG4gICAgICAgICAgICBvcHBvbmVudElkOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5hZGRCZXRXaXRoRGVzY3JpcHRpb24obmV3QmV0KSlcblxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL2NyZWF0ZS1idXlpblwiLCBuZXdCZXQuaWRdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByZXBhcmVUZXh0RmllbGQoKSB7XG5cbiAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gdGhpcy50ZXh0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgVGV4dEZpZWxkO1xuICAgICAgICBpZiAodGV4dEZpZWxkKSB7XG5cbiAgICAgICAgICAgIHRleHRGaWVsZC5pb3Mua2V5Ym9hcmRBcHBlYXJhbmNlID0gVUlLZXlib2FyZEFwcGVhcmFuY2VEYXJrO1xuICAgICAgICAgICAgdGV4dEZpZWxkLmlvcy5hdXRvY29ycmVjdGlvblR5cGUgPSBVSVRleHRBdXRvY29ycmVjdGlvblR5cGVObztcbiAgICAgICAgICAgIHRleHRGaWVsZC5pb3MuaW5wdXRBY2Nlc3NvcnlWaWV3ID0gVUlWaWV3LmFsbG9jKCkuaW5pdCgpO1xuICAgICAgICAgICAgdGV4dEZpZWxkLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19