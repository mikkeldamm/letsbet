"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQU0zQyxJQUFhLE9BQU87SUFBcEI7SUFTQSxDQUFDO0lBTkcsd0JBQU0sR0FBTixVQUFPLEdBQVE7UUFDWCxNQUFNLENBQUM7WUFDSCxJQUFJLEVBQUUsU0FBTyxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLEdBQUc7U0FDZixDQUFDO0lBQ04sQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVBVLGVBQU8sR0FBRyxTQUFTLENBQUM7QUFGbEIsT0FBTztJQURuQixpQkFBVSxFQUFFO0dBQ0EsT0FBTyxDQVNuQjtBQVRZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBCZXQgfSBmcm9tICcuL2FwcC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3Rpb25zIHtcblxuICAgIHN0YXRpYyBBRERfQkVUID0gJ0FkZCBiZXQnO1xuICAgIGFkZEJldChiZXQ6IEJldCk6IEFjdGlvbiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBBY3Rpb25zLkFERF9CRVQsXG4gICAgICAgICAgICBwYXlsb2FkOiBiZXRcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=