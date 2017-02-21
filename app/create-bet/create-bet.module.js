"use strict";
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
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
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            create_bet_routes_1.createBetRouting
        ],
        declarations: [
            create_bet_component_1.CreateBetComponent
        ]
    })
], CreateBetModule);
exports.CreateBetModule = CreateBetModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJldC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtYmV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMERBQW1FO0FBQ25FLG9EQUFxRTtBQUNyRSxzQ0FBeUM7QUFFekMseURBQXVEO0FBQ3ZELCtEQUE0RDtBQVk1RCxJQUFhLGVBQWU7SUFBNUI7SUFBK0IsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUFoQyxJQUFnQztBQUFuQixlQUFlO0lBVjNCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDZCQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsb0NBQWdCO1NBQ25CO1FBQ0QsWUFBWSxFQUFFO1lBQ1YseUNBQWtCO1NBQ3JCO0tBQ0osQ0FBQztHQUNXLGVBQWUsQ0FBSTtBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgY3JlYXRlQmV0Um91dGluZyB9IGZyb20gXCIuL2NyZWF0ZS1iZXQucm91dGVzXCI7XG5pbXBvcnQgeyBDcmVhdGVCZXRDb21wb25lbnQgfSBmcm9tIFwiLi9jcmVhdGUtYmV0LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgY3JlYXRlQmV0Um91dGluZ1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIENyZWF0ZUJldENvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQmV0TW9kdWxlIHsgfSJdfQ==