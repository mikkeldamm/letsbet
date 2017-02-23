"use strict";
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var page_1 = require("ui/page");
var firebase = require("nativescript-plugin-firebase");
var AppComponent = (function () {
    function AppComponent(_page, _store) {
        this._page = _page;
        this._store = _store;
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase.init({
            onMessageReceivedCallback: function (message) {
                console.log("Title: " + message.title);
                console.log("Body: " + message.body);
            },
            onPushTokenReceivedCallback: function (token) {
                console.log("Firebase push token: " + token);
            },
            onAuthStateChanged: function (data) {
                console.log((data.loggedIn ? "Logged in to firebase" : "Logged out from firebase") + " (init's onAuthStateChanged callback)");
            }
        }).then(function (instance) {
            console.log("firebase.init done");
            firebase.push('/lars', { name: 'Damm damm', age: 20 });
        }, function (err) {
            console.log("firebase.error");
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHNDQUFrRDtBQUVsRCxxQ0FBb0M7QUFHcEMsZ0NBQStCO0FBRy9CLHVEQUF5RDtBQVl6RCxJQUFhLFlBQVk7SUFFckIsc0JBQW9CLEtBQVcsRUFBVSxNQUF1QjtRQUE1QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7SUFFaEUsQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFFSSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1YseUJBQXlCLEVBQUUsVUFBUyxPQUFPO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxDQUFDO1lBQ0QsMkJBQTJCLEVBQUUsVUFBUyxLQUFLO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ2pELENBQUM7WUFDRCxrQkFBa0IsRUFBRSxVQUFDLElBQUk7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixHQUFHLDBCQUEwQixDQUFDLEdBQUcsdUNBQXVDLENBQUMsQ0FBQztZQUNsSSxDQUFDO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsRUFBRSxVQUFDLEdBQUc7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENZLFlBQVk7SUFOeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSwrRUFFVDtLQUNKLENBQUM7cUNBRzZCLFdBQUksRUFBa0IsYUFBSztHQUY3QyxZQUFZLENBb0N4QjtBQXBDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi9zdG9yZS9hcHAuc3RhdGUnO1xuXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcblxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcblxuZGVjbGFyZSB2YXIgTlNNdXRhYmxlRGljdGlvbmFyeTogYW55O1xuZGVjbGFyZSB2YXIgVUlDb2xvcjogYW55O1xuZGVjbGFyZSB2YXIgVUlUZXh0QXR0cmlidXRlVGV4dENvbG9yOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1tYWluXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHBhZ2Utcm91dGVyLW91dGxldCByb3c9XCIwXCIgY29sPVwiMFwiPjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UsIHByaXZhdGUgX3N0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcblxuICAgICAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpdGxlOiBcIiArIG1lc3NhZ2UudGl0bGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQm9keTogXCIgKyBtZXNzYWdlLmJvZHkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNlIHB1c2ggdG9rZW46IFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogKGRhdGEpID0+IHsgLy8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygoZGF0YS5sb2dnZWRJbiA/IFwiTG9nZ2VkIGluIHRvIGZpcmViYXNlXCIgOiBcIkxvZ2dlZCBvdXQgZnJvbSBmaXJlYmFzZVwiKSArIFwiIChpbml0J3Mgb25BdXRoU3RhdGVDaGFuZ2VkIGNhbGxiYWNrKVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICAgICAgICAgICAgZmlyZWJhc2UucHVzaCgnL2xhcnMnLCB7IG5hbWU6ICdEYW1tIGRhbW0nLCBhZ2U6IDIwfSk7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuZXJyb3JcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3N0b3JlLnNlbGVjdChzID0+IHMpLnN1YnNjcmliZShzID0+IHsgXG4gICAgICAgICAgICBpZiAocy5iZXQuYmV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCRVRTIDE6IFwiKTsgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocy5iZXQuYmV0c1swXS5kZXNjcmlwdGlvbik7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxufSJdfQ==