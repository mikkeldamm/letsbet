"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_state_1 = require("./app.state");
var app_actions_1 = require("./app.actions");
function appReducer(state, action) {
    if (state === void 0) { state = app_state_1.initialBetState; }
    switch (action.type) {
        case app_actions_1.Actions.ADD_BET: {
            var newState = Object.assign({}, state, { bets: state.bets.concat([action.payload]) });
            return newState;
        }
        default: {
            return state;
        }
    }
}
exports.appReducer = appReducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlDQUF3RDtBQUN4RCw2Q0FBd0M7QUFHeEMsb0JBQTJCLEtBQXVCLEVBQUUsTUFBYztJQUF2QyxzQkFBQSxFQUFBLG1DQUF1QjtJQUM5QyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVsQixLQUFLLHFCQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFNLEtBQUssQ0FBQyxJQUFJLFNBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsQ0FBQztZQUNyRixNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BCLENBQUM7UUFFRCxTQUFTLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQVpELGdDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBCZXRTdGF0ZSwgaW5pdGlhbEJldFN0YXRlIH0gZnJvbSAnLi9hcHAuc3RhdGUnO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4vYXBwLmFjdGlvbnMnO1xuaW1wb3J0IHsgQmV0IH0gZnJvbSAnLi9hcHAubW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxCZXRTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pOiBCZXRTdGF0ZSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgICAgIGNhc2UgQWN0aW9ucy5BRERfQkVUOiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGJldHM6IFsuLi5zdGF0ZS5iZXRzLCBhY3Rpb24ucGF5bG9hZF3CoH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==