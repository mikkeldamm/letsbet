"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Actions = Actions_1 = (function () {
    function Actions() {
    }
    Actions.prototype.addBetWithDescription = function (bet) {
        return {
            type: Actions_1.ADD_BET_WITH_DESCRIPTION,
            payload: bet
        };
    };
    Actions.prototype.updateBetWithBuyin = function (id, buyin) {
        return {
            type: Actions_1.UPDATE_BET_WITH_BUYIN,
            payload: { id: id, buyin: buyin }
        };
    };
    return Actions;
}());
Actions.ADD_BET_WITH_DESCRIPTION = 'Add bet with description';
Actions.UPDATE_BET_WITH_BUYIN = 'Update bet with buyin';
Actions = Actions_1 = __decorate([
    core_1.Injectable()
], Actions);
exports.Actions = Actions;
var Actions_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQU0zQyxJQUFhLE9BQU87SUFBcEI7SUFrQkEsQ0FBQztJQWJHLHVDQUFxQixHQUFyQixVQUFzQixHQUFRO1FBQzFCLE1BQU0sQ0FBQztZQUNILElBQUksRUFBRSxTQUFPLENBQUMsd0JBQXdCO1lBQ3RDLE9BQU8sRUFBRSxHQUFHO1NBQ2YsQ0FBQztJQUNOLENBQUM7SUFFRCxvQ0FBa0IsR0FBbEIsVUFBbUIsRUFBVSxFQUFFLEtBQWE7UUFDeEMsTUFBTSxDQUFDO1lBQ0gsSUFBSSxFQUFFLFNBQU8sQ0FBQyxxQkFBcUI7WUFDbkMsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUU7U0FDekIsQ0FBQztJQUNOLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWhCVSxnQ0FBd0IsR0FBRywwQkFBMEIsQ0FBQztBQUN0RCw2QkFBcUIsR0FBRyx1QkFBdUIsQ0FBQztBQUg5QyxPQUFPO0lBRG5CLGlCQUFVLEVBQUU7R0FDQSxPQUFPLENBa0JuQjtBQWxCWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgQmV0IH0gZnJvbSAnLi9hcHAubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0aW9ucyB7XG5cbiAgICBzdGF0aWMgQUREX0JFVF9XSVRIX0RFU0NSSVBUSU9OID0gJ0FkZCBiZXQgd2l0aCBkZXNjcmlwdGlvbic7XG4gICAgc3RhdGljIFVQREFURV9CRVRfV0lUSF9CVVlJTiA9ICdVcGRhdGUgYmV0IHdpdGggYnV5aW4nO1xuXG4gICAgYWRkQmV0V2l0aERlc2NyaXB0aW9uKGJldDogQmV0KTogQWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvbnMuQUREX0JFVF9XSVRIX0RFU0NSSVBUSU9OLFxuICAgICAgICAgICAgcGF5bG9hZDogYmV0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdXBkYXRlQmV0V2l0aEJ1eWluKGlkOiBzdHJpbmcsIGJ1eWluOiBzdHJpbmcpOiBBY3Rpb24ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogQWN0aW9ucy5VUERBVEVfQkVUX1dJVEhfQlVZSU4sXG4gICAgICAgICAgICBwYXlsb2FkOiB7IGlkLCBidXlpbiB9XG4gICAgICAgIH07XG4gICAgfVxufVxuIl19