"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var store_1 = require("@ngrx/store");
var app_actions_1 = require("./../store/app.actions");
var keyboard_observer_1 = require("./../utils/keyboard-observer");
var page_1 = require("ui/page");
var CreateBetComponent = (function () {
    function CreateBetComponent(_page, _router, _store, _actions, _keyboardObserver) {
        var _this = this;
        this._page = _page;
        this._router = _router;
        this._store = _store;
        this._actions = _actions;
        this._keyboardObserver = _keyboardObserver;
        this.betDescription = "";
        this._page.actionBarHidden = true;
        this._page.enableSwipeBackNavigation = false;
        this._page.backgroundSpanUnderStatusBar = true;
        this._page.on("navigatingTo", function () {
            _this.test();
        });
    }
    CreateBetComponent.prototype.ngOnInit = function () {
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
        this.test();
    };
    CreateBetComponent.prototype.test = function () {
        var textField = this.textContainer.nativeElement;
        if (textField) {
            textField.ios.keyboardAppearance = UIKeyboardAppearanceDark;
            textField.ios.autocorrectionType = UITextAutocorrectionTypeNo;
            textField.ios.inputAccessoryView = UIView.alloc().init();
            textField.focus();
        }
    };
    CreateBetComponent.prototype.onTap = function () {
        var newBet = {
            description: this.betDescription,
            buyin: null
        };
        this._store.dispatch(this._actions.addBet(newBet));
        this._router.navigate(["/create-buyin"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtYmV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW1HO0FBR25HLHNEQUErRDtBQUkvRCxxQ0FBb0M7QUFDcEMsc0RBQWlEO0FBSWpELGtFQUFnRTtBQWdCaEUsZ0NBQStCO0FBVy9CLElBQWEsa0JBQWtCO0lBUzNCLDRCQUFvQixLQUFXLEVBQ25CLE9BQXlCLEVBQ3pCLE1BQXVCLEVBQ3ZCLFFBQWlCLEVBQ2pCLGlCQUFtQztRQUovQyxpQkFhQztRQWJtQixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVJ4QyxtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQVUvQixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7UUFFL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFO1lBQzFCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxxQ0FBUSxHQUFmO0lBRUEsQ0FBQztJQUVNLHdDQUFXLEdBQWxCO1FBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsaUNBQWlDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekQsQ0FBQztJQUNMLENBQUM7SUFFTSw0Q0FBZSxHQUF0QjtRQUFBLGlCQU9DO1FBTEcsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBRTdGLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0saUNBQUksR0FBWDtRQUVJLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBMEIsQ0FBQztRQUNoRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBRVosU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyx3QkFBd0IsQ0FBQztZQUM1RCxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLDBCQUEwQixDQUFDO1lBQzlELFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pELFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixDQUFDO0lBQ0wsQ0FBQztJQUVNLGtDQUFLLEdBQVo7UUFFSSxJQUFNLE1BQU0sR0FBUTtZQUNoQixXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDaEMsS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUVsRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQW5FRCxJQW1FQztBQWpFK0I7SUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7OEJBQWdCLGlCQUFVO3lEQUFDO0FBQ3RCO0lBQS9CLGdCQUFTLENBQUMsbUJBQW1CLENBQUM7OEJBQW9CLGlCQUFVOzZEQUFDO0FBSHJELGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FDekMsQ0FBQztxQ0FVNkIsV0FBSTtRQUNWLHlCQUFnQjtRQUNqQixhQUFLO1FBQ0gscUJBQU87UUFDRSxvQ0FBZ0I7R0FidEMsa0JBQWtCLENBbUU5QjtBQW5FWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICcuLy4uL3N0b3JlL2FwcC5hY3Rpb25zJztcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi8uLi9zdG9yZS9hcHAuc3RhdGUnO1xuaW1wb3J0IHsgQmV0IH0gZnJvbSAnLi8uLi9zdG9yZS9hcHAubW9kZWwnO1xuXG5pbXBvcnQgeyBLZXlib2FyZE9ic2VydmVyIH0gZnJvbSAnLi8uLi91dGlscy9rZXlib2FyZC1vYnNlcnZlcic7XG5cbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5kZWNsYXJlIHZhciBVSUtleWJvYXJkV2lsbENoYW5nZUZyYW1lTm90aWZpY2F0aW9uOiBhbnk7XG5kZWNsYXJlIHZhciBVSUtleWJvYXJkRnJhbWVFbmRVc2VySW5mb0tleTogYW55O1xuZGVjbGFyZSB2YXIgVUlLZXlib2FyZEFwcGVhcmFuY2VEYXJrOiBhbnk7XG5kZWNsYXJlIHZhciBVSVRleHRBdXRvY29ycmVjdGlvblR5cGVObzogYW55O1xuZGVjbGFyZSB2YXIgVUlWaWV3OiBhbnk7XG5cbmRlY2xhcmUgY29uc3QgTlNBdHRyaWJ1dGVkU3RyaW5nOiBhbnk7XG5kZWNsYXJlIGNvbnN0IE5TRGljdGlvbmFyeTogYW55O1xuZGVjbGFyZSBjb25zdCBOU0ZvcmVncm91bmRDb2xvckF0dHJpYnV0ZU5hbWU6IGFueTtcblxuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgaU9TQXBwbGljYXRpb24gfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiY3JlYXRlLWJldFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jcmVhdGUtYmV0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2NyZWF0ZS1iZXQtY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVCZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKFwidGV4dENvbnRhaW5lclwiKSB0ZXh0Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJ0ZXh0UHVzaENvbnRhaW5lclwiKSB0ZXh0UHVzaENvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBiZXREZXNjcmlwdGlvbjogc3RyaW5nID0gXCJcIjtcblxuICAgIHByaXZhdGUgX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgX3N0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXG4gICAgICAgIHByaXZhdGUgX2FjdGlvbnM6IEFjdGlvbnMsXG4gICAgICAgIHByaXZhdGUgX2tleWJvYXJkT2JzZXJ2ZXI6IEtleWJvYXJkT2JzZXJ2ZXIpIHtcblxuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BhZ2UuZW5hYmxlU3dpcGVCYWNrTmF2aWdhdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3BhZ2Uub24oXCJuYXZpZ2F0aW5nVG9cIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50ZXN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblxuICAgICAgICBpZiAodGhpcy5fa2V5Ym9hcmRIZWlnaHRDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIHRoaXMuX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5fa2V5Ym9hcmRPYnNlcnZlci5oZWlnaHRDaGFuZ2UkKCkuc3Vic2NyaWJlKChoZWlnaHQpID0+IHtcblxuICAgICAgICAgICAgdGhpcy50ZXh0UHVzaENvbnRhaW5lci5uYXRpdmVFbGVtZW50LmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGVzdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0ZXN0KCkge1xuXG4gICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IHRoaXMudGV4dENvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIFRleHRGaWVsZDtcbiAgICAgICAgaWYgKHRleHRGaWVsZCkge1xuXG4gICAgICAgICAgICB0ZXh0RmllbGQuaW9zLmtleWJvYXJkQXBwZWFyYW5jZSA9IFVJS2V5Ym9hcmRBcHBlYXJhbmNlRGFyaztcbiAgICAgICAgICAgIHRleHRGaWVsZC5pb3MuYXV0b2NvcnJlY3Rpb25UeXBlID0gVUlUZXh0QXV0b2NvcnJlY3Rpb25UeXBlTm87XG4gICAgICAgICAgICB0ZXh0RmllbGQuaW9zLmlucHV0QWNjZXNzb3J5VmlldyA9IFVJVmlldy5hbGxvYygpLmluaXQoKTtcbiAgICAgICAgICAgIHRleHRGaWVsZC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwKCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3QmV0OiBCZXQgPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5iZXREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGJ1eWluOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5hZGRCZXQobmV3QmV0KSlcblxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL2NyZWF0ZS1idXlpblwiXSk7XG4gICAgfVxufSJdfQ==