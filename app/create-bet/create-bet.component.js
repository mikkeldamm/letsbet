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
    CreateBetComponent.prototype.prepareTextField = function () {
        var textField = this.textContainer.nativeElement;
        if (textField) {
            textField.ios.keyboardAppearance = UIKeyboardAppearanceDark;
            textField.ios.autocorrectionType = UITextAutocorrectionTypeNo;
            textField.ios.inputAccessoryView = UIView.alloc().init();
            textField.focus();
        }
    };
    CreateBetComponent.prototype.onGoToCreateBuyin = function () {
        var newBet = {
            id: id_generator_1.guidGenerator(),
            description: this.betDescription,
            buyin: null
        };
        this._store.dispatch(this._actions.addBetWithDescription(newBet));
        this._router.navigate(["/create-buyin", newBet.id]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtYmV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRztBQUNuRyxxQ0FBb0M7QUFFcEMsc0RBQStEO0FBRy9ELGdDQUErQjtBQUcvQixvREFBK0M7QUFJL0MsZ0VBQThEO0FBQzlELHNEQUFzRDtBQVF0RCxJQUFhLGtCQUFrQjtJQVMzQiw0QkFBb0IsS0FBVyxFQUNYLE9BQXlCLEVBQ3pCLE1BQXVCLEVBQ3ZCLFFBQWlCLEVBQ2pCLGlCQUFtQztRQUpuQyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBUmhELG1CQUFjLEdBQVcsRUFBRSxDQUFDO0lBUXVCLENBQUM7SUFFcEQscUNBQVEsR0FBZjtRQUFBLGlCQVNDO1FBUEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO1FBRS9DLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRTtZQUMxQixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pELENBQUM7SUFDTCxDQUFDO0lBRU0sNENBQWUsR0FBdEI7UUFBQSxpQkFPQztRQUxHLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUM3RixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sNkNBQWdCLEdBQXZCO1FBRUksSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUEwQixDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFWixTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLHdCQUF3QixDQUFDO1lBQzVELFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsMEJBQTBCLENBQUM7WUFDOUQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDTCxDQUFDO0lBRU0sOENBQWlCLEdBQXhCO1FBRUksSUFBTSxNQUFNLEdBQVE7WUFDaEIsRUFBRSxFQUFFLDRCQUFhLEVBQUU7WUFDbkIsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ2hDLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUVqRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBbEVELElBa0VDO0FBaEUrQjtJQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQzs4QkFBZ0IsaUJBQVU7eURBQUM7QUFDdEI7SUFBL0IsZ0JBQVMsQ0FBQyxtQkFBbUIsQ0FBQzs4QkFBb0IsaUJBQVU7NkRBQUM7QUFIckQsa0JBQWtCO0lBTjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztLQUN6QyxDQUFDO3FDQVU2QixXQUFJO1FBQ0YseUJBQWdCO1FBQ2pCLGFBQUs7UUFDSCxxQkFBTztRQUNFLG9DQUFnQjtHQWI5QyxrQkFBa0IsQ0FrRTlCO0FBbEVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcblxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FwcC5hY3Rpb25zJztcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvYXBwLnN0YXRlJztcbmltcG9ydCB7IEJldCB9IGZyb20gJy4uL3N0b3JlL2FwcC5tb2RlbCc7XG5cbmltcG9ydCB7IEtleWJvYXJkT2JzZXJ2ZXIgfSBmcm9tICcuLi91dGlscy9rZXlib2FyZC1vYnNlcnZlcic7XG5pbXBvcnQgeyBndWlkR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbHMvaWQtZ2VuZXJhdG9yJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiY3JlYXRlLWJldFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jcmVhdGUtYmV0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2NyZWF0ZS1iZXQtY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVCZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKFwidGV4dENvbnRhaW5lclwiKSB0ZXh0Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJ0ZXh0UHVzaENvbnRhaW5lclwiKSB0ZXh0UHVzaENvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBiZXREZXNjcmlwdGlvbjogc3RyaW5nID0gXCJcIjtcblxuICAgIHByaXZhdGUgX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9zdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2FjdGlvbnM6IEFjdGlvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfa2V5Ym9hcmRPYnNlcnZlcjogS2V5Ym9hcmRPYnNlcnZlcikge31cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BhZ2UuZW5hYmxlU3dpcGVCYWNrTmF2aWdhdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3BhZ2Uub24oXCJuYXZpZ2F0aW5nVG9cIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVwYXJlVGV4dEZpZWxkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblxuICAgICAgICBpZiAodGhpcy5fa2V5Ym9hcmRIZWlnaHRDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIHRoaXMuX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5fa2V5Ym9hcmRPYnNlcnZlci5oZWlnaHRDaGFuZ2UkKCkuc3Vic2NyaWJlKChoZWlnaHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGV4dFB1c2hDb250YWluZXIubmF0aXZlRWxlbWVudC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJlcGFyZVRleHRGaWVsZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcmVwYXJlVGV4dEZpZWxkKCkge1xuXG4gICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IHRoaXMudGV4dENvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIFRleHRGaWVsZDtcbiAgICAgICAgaWYgKHRleHRGaWVsZCkge1xuXG4gICAgICAgICAgICB0ZXh0RmllbGQuaW9zLmtleWJvYXJkQXBwZWFyYW5jZSA9IFVJS2V5Ym9hcmRBcHBlYXJhbmNlRGFyaztcbiAgICAgICAgICAgIHRleHRGaWVsZC5pb3MuYXV0b2NvcnJlY3Rpb25UeXBlID0gVUlUZXh0QXV0b2NvcnJlY3Rpb25UeXBlTm87XG4gICAgICAgICAgICB0ZXh0RmllbGQuaW9zLmlucHV0QWNjZXNzb3J5VmlldyA9IFVJVmlldy5hbGxvYygpLmluaXQoKTtcbiAgICAgICAgICAgIHRleHRGaWVsZC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uR29Ub0NyZWF0ZUJ1eWluKCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3QmV0OiBCZXQgPSB7XG4gICAgICAgICAgICBpZDogZ3VpZEdlbmVyYXRvcigpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuYmV0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICBidXlpbjogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuYWRkQmV0V2l0aERlc2NyaXB0aW9uKG5ld0JldCkpXG5cbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi9jcmVhdGUtYnV5aW5cIiwgbmV3QmV0LmlkXSk7XG4gICAgfVxufSJdfQ==