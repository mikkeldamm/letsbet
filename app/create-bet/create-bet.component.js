"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var store_1 = require("@ngrx/store");
var app_actions_1 = require("./../store/app.actions");
var keyboard_observer_1 = require("./../utils/keyboard-observer");
var contacts = require("nativescript-contacts");
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
        contacts.getAllContacts().then(function (args) {
            console.log("getAllContacts Complete");
            console.log(JSON.stringify(args));
            /// Returns args: 
            /// args.data: Generic cross platform JSON object, null if no contacts were found. 
            /// args.reponse: "fetch" 
        }, function (err) {
            console.log("Error: " + err);
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
        var textField = this.textContainer.nativeElement;
        if (textField) {
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtYmV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW1HO0FBR25HLHNEQUErRDtBQUkvRCxxQ0FBb0M7QUFDcEMsc0RBQWlEO0FBSWpELGtFQUFnRTtBQUdoRSxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUUsdUJBQXVCLENBQUUsQ0FBQztBQWNsRCxnQ0FBK0I7QUFXL0IsSUFBYSxrQkFBa0I7SUFTM0IsNEJBQW9CLEtBQVcsRUFDbkIsT0FBeUIsRUFDekIsTUFBdUIsRUFDdkIsUUFBaUIsRUFDakIsaUJBQW1DO1FBSi9DLGlCQWFDO1FBYm1CLFVBQUssR0FBTCxLQUFLLENBQU07UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBUnhDLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBVS9CLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztRQUUvQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUU7WUFDMUIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHFDQUFRLEdBQWY7UUFHSSxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEMsa0JBQWtCO1lBQ2xCLG1GQUFtRjtZQUNuRiwwQkFBMEI7UUFDOUIsQ0FBQyxFQUFFLFVBQVMsR0FBRztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHdDQUFXLEdBQWxCO1FBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsaUNBQWlDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekQsQ0FBQztJQUNMLENBQUM7SUFFTSw0Q0FBZSxHQUF0QjtRQUFBLGlCQU9DO1FBTEcsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBRTdGLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0saUNBQUksR0FBWDtRQUVJLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBMEIsQ0FBQztRQUNoRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBRVosU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyx3QkFBd0IsQ0FBQztZQUM1RCxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLDBCQUEwQixDQUFDO1lBQzlELFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pELFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixDQUFDO0lBQ0wsQ0FBQztJQUVNLGtDQUFLLEdBQVo7UUFFSSxJQUFNLE1BQU0sR0FBUTtZQUNoQixXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDaEMsS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUdsRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQTBCLENBQUM7UUFDaEUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUVoQixDQUFDO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFuRkQsSUFtRkM7QUFqRitCO0lBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDOzhCQUFnQixpQkFBVTt5REFBQztBQUN0QjtJQUEvQixnQkFBUyxDQUFDLG1CQUFtQixDQUFDOzhCQUFvQixpQkFBVTs2REFBQztBQUhyRCxrQkFBa0I7SUFOOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO0tBQ3pDLENBQUM7cUNBVTZCLFdBQUk7UUFDVix5QkFBZ0I7UUFDakIsYUFBSztRQUNILHFCQUFPO1FBQ0Usb0NBQWdCO0dBYnRDLGtCQUFrQixDQW1GOUI7QUFuRlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnLi8uLi9zdG9yZS9hcHAuYWN0aW9ucyc7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4vLi4vc3RvcmUvYXBwLnN0YXRlJztcbmltcG9ydCB7IEJldCB9IGZyb20gJy4vLi4vc3RvcmUvYXBwLm1vZGVsJztcblxuaW1wb3J0IHsgS2V5Ym9hcmRPYnNlcnZlciB9IGZyb20gJy4vLi4vdXRpbHMva2V5Ym9hcmQtb2JzZXJ2ZXInO1xuXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcbnZhciBjb250YWN0cyA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWNvbnRhY3RzXCIgKTtcblxuZGVjbGFyZSB2YXIgVUlLZXlib2FyZFdpbGxDaGFuZ2VGcmFtZU5vdGlmaWNhdGlvbjogYW55O1xuZGVjbGFyZSB2YXIgVUlLZXlib2FyZEZyYW1lRW5kVXNlckluZm9LZXk6IGFueTtcbmRlY2xhcmUgdmFyIFVJS2V5Ym9hcmRBcHBlYXJhbmNlRGFyazogYW55O1xuZGVjbGFyZSB2YXIgVUlUZXh0QXV0b2NvcnJlY3Rpb25UeXBlTm86IGFueTtcbmRlY2xhcmUgdmFyIFVJVmlldzogYW55O1xuXG5kZWNsYXJlIGNvbnN0IE5TQXR0cmlidXRlZFN0cmluZzogYW55O1xuZGVjbGFyZSBjb25zdCBOU0RpY3Rpb25hcnk6IGFueTtcbmRlY2xhcmUgY29uc3QgTlNGb3JlZ3JvdW5kQ29sb3JBdHRyaWJ1dGVOYW1lOiBhbnk7XG5cbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IGlPU0FwcGxpY2F0aW9uIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImNyZWF0ZS1iZXRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY3JlYXRlLWJldC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9jcmVhdGUtYmV0LWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQmV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuXG4gICAgQFZpZXdDaGlsZChcInRleHRDb250YWluZXJcIikgdGV4dENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGV4dFB1c2hDb250YWluZXJcIikgdGV4dFB1c2hDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgYmV0RGVzY3JpcHRpb246IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwcml2YXRlIF9rZXlib2FyZEhlaWdodENoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIF9zdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxuICAgICAgICBwcml2YXRlIF9hY3Rpb25zOiBBY3Rpb25zLFxuICAgICAgICBwcml2YXRlIF9rZXlib2FyZE9ic2VydmVyOiBLZXlib2FyZE9ic2VydmVyKSB7XG5cbiAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYWdlLmVuYWJsZVN3aXBlQmFja05hdmlnYXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9wYWdlLm9uKFwibmF2aWdhdGluZ1RvXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGVzdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG5cblxuICAgICAgICBjb250YWN0cy5nZXRBbGxDb250YWN0cygpLnRoZW4oZnVuY3Rpb24oYXJncyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldEFsbENvbnRhY3RzIENvbXBsZXRlXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYXJncykpO1xuICAgICAgICAgICAgLy8vIFJldHVybnMgYXJnczogXG4gICAgICAgICAgICAvLy8gYXJncy5kYXRhOiBHZW5lcmljIGNyb3NzIHBsYXRmb3JtIEpTT04gb2JqZWN0LCBudWxsIGlmIG5vIGNvbnRhY3RzIHdlcmUgZm91bmQuIFxuICAgICAgICAgICAgLy8vIGFyZ3MucmVwb25zZTogXCJmZXRjaFwiIFxuICAgICAgICB9LCBmdW5jdGlvbihlcnIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX2tleWJvYXJkSGVpZ2h0Q2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlib2FyZEhlaWdodENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgICAgICB0aGlzLl9rZXlib2FyZEhlaWdodENoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuX2tleWJvYXJkT2JzZXJ2ZXIuaGVpZ2h0Q2hhbmdlJCgpLnN1YnNjcmliZSgoaGVpZ2h0KSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMudGV4dFB1c2hDb250YWluZXIubmF0aXZlRWxlbWVudC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRlc3QoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGVzdCgpIHtcblxuICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSB0aGlzLnRleHRDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBUZXh0RmllbGQ7XG4gICAgICAgIGlmICh0ZXh0RmllbGQpIHtcblxuICAgICAgICAgICAgdGV4dEZpZWxkLmlvcy5rZXlib2FyZEFwcGVhcmFuY2UgPSBVSUtleWJvYXJkQXBwZWFyYW5jZURhcms7XG4gICAgICAgICAgICB0ZXh0RmllbGQuaW9zLmF1dG9jb3JyZWN0aW9uVHlwZSA9IFVJVGV4dEF1dG9jb3JyZWN0aW9uVHlwZU5vO1xuICAgICAgICAgICAgdGV4dEZpZWxkLmlvcy5pbnB1dEFjY2Vzc29yeVZpZXcgPSBVSVZpZXcuYWxsb2MoKS5pbml0KCk7XG4gICAgICAgICAgICB0ZXh0RmllbGQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld0JldDogQmV0ID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuYmV0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICBidXlpbjogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuYWRkQmV0KG5ld0JldCkpXG5cblxuICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSB0aGlzLnRleHRDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBUZXh0RmllbGQ7XG4gICAgICAgIGlmICh0ZXh0RmllbGQpIHtcbiAgICAgICAgICAgIC8vdGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvY3JlYXRlLWJ1eWluXCJdKTtcbiAgICB9XG59Il19