"use strict";
var core_1 = require("@angular/core");
var Actions = Actions_1 = (function () {
    function Actions() {
    }
    Actions.prototype.addBet = function (bet) {
        return {
            type: Actions_1.ADD_BET,
            payload: bet
        };
    };
    return Actions;
}());
Actions.ADD_BET = 'Add bet';
Actions = Actions_1 = __decorate([
    core_1.Injectable()
], Actions);
exports.Actions = Actions;
var Actions_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBTTNDLElBQWEsT0FBTztJQUFwQjtJQVNBLENBQUM7SUFORyx3QkFBTSxHQUFOLFVBQU8sR0FBUTtRQUNYLE1BQU0sQ0FBQztZQUNILElBQUksRUFBRSxTQUFPLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsR0FBRztTQUNmLENBQUM7SUFDTixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUFURCxJQVNDO0FBUFUsZUFBTyxHQUFHLFNBQVMsQ0FBQztBQUZsQixPQUFPO0lBRG5CLGlCQUFVLEVBQUU7R0FDQSxPQUFPLENBU25CO0FBVFksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IEJldCB9IGZyb20gJy4vYXBwLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGlvbnMge1xuXG4gICAgc3RhdGljIEFERF9CRVQgPSAnQWRkIGJldCc7XG4gICAgYWRkQmV0KGJldDogQmV0KTogQWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvbnMuQUREX0JFVCxcbiAgICAgICAgICAgIHBheWxvYWQ6IGJldFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==