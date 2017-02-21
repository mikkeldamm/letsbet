"use strict";
var store_1 = require("@ngrx/store");
var app_reducer_1 = require("./app.reducer");
var reducers = {
    bet: app_reducer_1.appReducer
};
function rootReducer(state, action) {
    return store_1.combineReducers(reducers)(state, action);
}
exports.rootReducer = rootReducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vdC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQ0FBNkQ7QUFFN0QsNkNBQTJDO0FBRTNDLElBQU0sUUFBUSxHQUFHO0lBQ2IsR0FBRyxFQUFFLHdCQUFVO0NBQ2xCLENBQUM7QUFFRixxQkFBNEIsS0FBVSxFQUFFLE1BQVc7SUFDL0MsTUFBTSxDQUFDLHVCQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFGRCxrQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdAbmdyeC9jb3JlL2NvbXBvc2UnO1xuaW1wb3J0IHsgQWN0aW9uUmVkdWNlciwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBhcHBSZWR1Y2VyIH0gZnJvbSAnLi9hcHAucmVkdWNlcic7XG5cbmNvbnN0IHJlZHVjZXJzID0ge1xuICAgIGJldDogYXBwUmVkdWNlclxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvb3RSZWR1Y2VyKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSB7XG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykoc3RhdGUsIGFjdGlvbik7XG59XG4iXX0=