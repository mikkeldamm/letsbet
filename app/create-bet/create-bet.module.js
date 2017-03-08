"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJldC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtYmV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBEQUFtRTtBQUNuRSxvREFBcUU7QUFDckUsc0NBQXlDO0FBRXpDLHlEQUF1RDtBQUN2RCwrREFBNEQ7QUFZNUQsSUFBYSxlQUFlO0lBQTVCO0lBQStCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFBaEMsSUFBZ0M7QUFBbkIsZUFBZTtJQVYzQixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCw2QkFBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLG9DQUFnQjtTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLHlDQUFrQjtTQUNyQjtLQUNKLENBQUM7R0FDVyxlQUFlLENBQUk7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUJldFJvdXRpbmcgfSBmcm9tIFwiLi9jcmVhdGUtYmV0LnJvdXRlc1wiO1xuaW1wb3J0IHsgQ3JlYXRlQmV0Q29tcG9uZW50IH0gZnJvbSBcIi4vY3JlYXRlLWJldC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIGNyZWF0ZUJldFJvdXRpbmdcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDcmVhdGVCZXRDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUJldE1vZHVsZSB7IH0iXX0=