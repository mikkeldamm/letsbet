"use strict";
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var page_1 = require("ui/page");
var AppComponent = (function () {
    function AppComponent(_page, _store) {
        this._page = _page;
        this._store = _store;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._store.select(function (s) { return s; }).subscribe(function (s) {
            if (s.bet.bets.length > 0) {
                console.log("BETS 1: ");
                console.log(s.bet.bets[0].description);
            }
        });
        this._page.backgroundSpanUnderStatusBar = true;
        this._page.actionBarHidden = true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "app-main",
        template: "\n        <page-router-outlet row=\"0\" col=\"0\"></page-router-outlet>\n    "
    }),
    __metadata("design:paramtypes", [page_1.Page, store_1.Store])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHNDQUFrRDtBQUVsRCxxQ0FBb0M7QUFHcEMsZ0NBQStCO0FBYS9CLElBQWEsWUFBWTtJQUVyQixzQkFBb0IsS0FBVyxFQUFVLE1BQXVCO1FBQTVDLFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtJQUVoRSxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0MsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLCtFQUVUO0tBQ0osQ0FBQztxQ0FHNkIsV0FBSSxFQUFrQixhQUFLO0dBRjdDLFlBQVksQ0FrQnhCO0FBbEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuL3N0b3JlL2FwcC5zdGF0ZSc7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuXG5kZWNsYXJlIHZhciBOU011dGFibGVEaWN0aW9uYXJ5OiBhbnk7XG5kZWNsYXJlIHZhciBVSUNvbG9yOiBhbnk7XG5kZWNsYXJlIHZhciBVSVRleHRBdHRyaWJ1dGVUZXh0Q29sb3I6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLW1haW5cIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IHJvdz1cIjBcIiBjb2w9XCIwXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xuXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMuX3N0b3JlLnNlbGVjdChzID0+IHMpLnN1YnNjcmliZShzID0+IHsgXG4gICAgICAgICAgICBpZiAocy5iZXQuYmV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCRVRTIDE6IFwiKTsgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocy5iZXQuYmV0c1swXS5kZXNjcmlwdGlvbik7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxufSJdfQ==