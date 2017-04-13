"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
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
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            create_bet_routes_1.createBetRouting
        ],
        declarations: [
            create_bet_component_1.CreateBetComponent
        ]
    })
], CreateBetModule);
exports.CreateBetModule = CreateBetModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJldC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtYmV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUErQztBQUMvQyxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSx5REFBdUQ7QUFDdkQsK0RBQTREO0FBYTVELElBQWEsZUFBZTtJQUE1QjtJQUErQixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBQWhDLElBQWdDO0FBQW5CLGVBQWU7SUFYM0IsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wscUJBQVk7WUFDWix3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLG9DQUFnQjtTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLHlDQUFrQjtTQUNyQjtLQUNKLENBQUM7R0FDVyxlQUFlLENBQUk7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgY3JlYXRlQmV0Um91dGluZyB9IGZyb20gXCIuL2NyZWF0ZS1iZXQucm91dGVzXCI7XG5pbXBvcnQgeyBDcmVhdGVCZXRDb21wb25lbnQgfSBmcm9tIFwiLi9jcmVhdGUtYmV0LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBjcmVhdGVCZXRSb3V0aW5nXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ3JlYXRlQmV0Q29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVCZXRNb2R1bGUgeyB9Il19