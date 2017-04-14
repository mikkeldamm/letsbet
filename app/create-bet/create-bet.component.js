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
        this.betDescription = '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtYmV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRztBQUNuRyxxQ0FBb0M7QUFFcEMsc0RBQStEO0FBRy9ELGdDQUErQjtBQUcvQixvREFBK0M7QUFJL0MsZ0VBQThEO0FBQzlELHNEQUFzRDtBQVF0RCxJQUFhLGtCQUFrQjtJQVMzQiw0QkFBb0IsS0FBVyxFQUNYLE9BQXlCLEVBQ3pCLE1BQXVCLEVBQ3ZCLFFBQWlCLEVBQ2pCLGlCQUFtQztRQUpuQyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBUmhELG1CQUFjLEdBQVcsRUFBRSxDQUFDO0lBUXVCLENBQUM7SUFFcEQscUNBQVEsR0FBZjtRQUFBLGlCQVNDO1FBUEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO1FBRS9DLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRTtZQUMxQixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pELENBQUM7SUFDTCxDQUFDO0lBRU0sNENBQWUsR0FBdEI7UUFBQSxpQkFPQztRQUxHLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUM3RixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sOENBQWlCLEdBQXhCLFVBQXlCLFdBQW1CO1FBRXhDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFFTSw4Q0FBaUIsR0FBeEI7UUFFSSxJQUFNLE1BQU0sR0FBUTtZQUNoQixFQUFFLEVBQUUsNEJBQWEsRUFBRTtZQUNuQixXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDaEMsS0FBSyxFQUFFLElBQUk7WUFDWCxVQUFVLEVBQUUsSUFBSTtTQUNuQixDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBRWpFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTyw2Q0FBZ0IsR0FBeEI7UUFFSSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQTBCLENBQUM7UUFDaEUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVaLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsd0JBQXdCLENBQUM7WUFDNUQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRywwQkFBMEIsQ0FBQztZQUM5RCxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6RCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUF4RUQsSUF3RUM7QUF0RStCO0lBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDOzhCQUFnQixpQkFBVTt5REFBQztBQUN0QjtJQUEvQixnQkFBUyxDQUFDLG1CQUFtQixDQUFDOzhCQUFvQixpQkFBVTs2REFBQztBQUhyRCxrQkFBa0I7SUFOOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO0tBQ3pDLENBQUM7cUNBVTZCLFdBQUk7UUFDRix5QkFBZ0I7UUFDakIsYUFBSztRQUNILHFCQUFPO1FBQ0Usb0NBQWdCO0dBYjlDLGtCQUFrQixDQXdFOUI7QUF4RVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYXBwLmFjdGlvbnMnO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9hcHAuc3RhdGUnO1xuaW1wb3J0IHsgQmV0IH0gZnJvbSAnLi4vc3RvcmUvYmV0Lm1vZGVsJztcblxuaW1wb3J0IHsgS2V5Ym9hcmRPYnNlcnZlciB9IGZyb20gJy4uL3V0aWxzL2tleWJvYXJkLW9ic2VydmVyJztcbmltcG9ydCB7IGd1aWRHZW5lcmF0b3IgfSBmcm9tICcuLi91dGlscy9pZC1nZW5lcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjcmVhdGUtYmV0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS1iZXQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vY3JlYXRlLWJldC1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUJldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoXCJ0ZXh0Q29udGFpbmVyXCIpIHRleHRDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcInRleHRQdXNoQ29udGFpbmVyXCIpIHRleHRQdXNoQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGJldERlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcblxuICAgIHByaXZhdGUgX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9zdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2FjdGlvbnM6IEFjdGlvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfa2V5Ym9hcmRPYnNlcnZlcjogS2V5Ym9hcmRPYnNlcnZlcikge31cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BhZ2UuZW5hYmxlU3dpcGVCYWNrTmF2aWdhdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3BhZ2Uub24oXCJuYXZpZ2F0aW5nVG9cIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVwYXJlVGV4dEZpZWxkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcblxuICAgICAgICBpZiAodGhpcy5fa2V5Ym9hcmRIZWlnaHRDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIHRoaXMuX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5fa2V5Ym9hcmRPYnNlcnZlci5oZWlnaHRDaGFuZ2UkKCkuc3Vic2NyaWJlKChoZWlnaHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGV4dFB1c2hDb250YWluZXIubmF0aXZlRWxlbWVudC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJlcGFyZVRleHRGaWVsZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VEZXNjcmlwdGlvbihkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG5cbiAgICAgICAgdGhpcy5iZXREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkdvVG9DcmVhdGVCdXlpbigpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld0JldDogQmV0ID0ge1xuICAgICAgICAgICAgaWQ6IGd1aWRHZW5lcmF0b3IoKSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmJldERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgYnV5aW46IG51bGwsXG4gICAgICAgICAgICBvcHBvbmVudElkOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5hZGRCZXRXaXRoRGVzY3JpcHRpb24obmV3QmV0KSlcblxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL2NyZWF0ZS1idXlpblwiLCBuZXdCZXQuaWRdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByZXBhcmVUZXh0RmllbGQoKSB7XG5cbiAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gdGhpcy50ZXh0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgVGV4dEZpZWxkO1xuICAgICAgICBpZiAodGV4dEZpZWxkKSB7XG5cbiAgICAgICAgICAgIHRleHRGaWVsZC5pb3Mua2V5Ym9hcmRBcHBlYXJhbmNlID0gVUlLZXlib2FyZEFwcGVhcmFuY2VEYXJrO1xuICAgICAgICAgICAgdGV4dEZpZWxkLmlvcy5hdXRvY29ycmVjdGlvblR5cGUgPSBVSVRleHRBdXRvY29ycmVjdGlvblR5cGVObztcbiAgICAgICAgICAgIHRleHRGaWVsZC5pb3MuaW5wdXRBY2Nlc3NvcnlWaWV3ID0gVUlWaWV3LmFsbG9jKCkuaW5pdCgpO1xuICAgICAgICAgICAgdGV4dEZpZWxkLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19