"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var create_bet_routes_1 = require("./create-bet.routes");
var create_bet_component_1 = require("./create-bet.component");
var CreateBetModule = (function () {
    function CreateBetModule() {
    }
    return CreateBetModule;
}());
CreateBetModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            create_bet_routes_1.createBetRouting
        ],
        declarations: [
            create_bet_component_1.CreateBetComponent
        ]
    })
], CreateBetModule);
exports.CreateBetModule = CreateBetModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJldC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtYmV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUErQztBQUMvQyxzQ0FBeUM7QUFFekMseURBQXVEO0FBQ3ZELCtEQUE0RDtBQVc1RCxJQUFhLGVBQWU7SUFBNUI7SUFBK0IsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUFoQyxJQUFnQztBQUFuQixlQUFlO0lBVDNCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHFCQUFZO1lBQ1osb0NBQWdCO1NBQ25CO1FBQ0QsWUFBWSxFQUFFO1lBQ1YseUNBQWtCO1NBQ3JCO0tBQ0osQ0FBQztHQUNXLGVBQWUsQ0FBSTtBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUJldFJvdXRpbmcgfSBmcm9tIFwiLi9jcmVhdGUtYmV0LnJvdXRlc1wiO1xuaW1wb3J0IHsgQ3JlYXRlQmV0Q29tcG9uZW50IH0gZnJvbSBcIi4vY3JlYXRlLWJldC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgY3JlYXRlQmV0Um91dGluZ1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIENyZWF0ZUJldENvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQmV0TW9kdWxlIHsgfSJdfQ==