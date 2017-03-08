"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var create_buyin_routes_1 = require("./create-buyin.routes");
var create_buyin_component_1 = require("./create-buyin.component");
var CreateBuyinModule = (function () {
    function CreateBuyinModule() {
    }
    return CreateBuyinModule;
}());
CreateBuyinModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            create_buyin_routes_1.createBuyinRouting
        ],
        declarations: [
            create_buyin_component_1.CreateBuyinComponent
        ]
    })
], CreateBuyinModule);
exports.CreateBuyinModule = CreateBuyinModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJ1eWluLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1idXlpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBbUU7QUFDbkUsb0RBQXFFO0FBQ3JFLHNDQUF5QztBQUV6Qyw2REFBMkQ7QUFDM0QsbUVBQWdFO0FBWWhFLElBQWEsaUJBQWlCO0lBQTlCO0lBQWlDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFBbEMsSUFBa0M7QUFBckIsaUJBQWlCO0lBVjdCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDZCQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsd0NBQWtCO1NBQ3JCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNkNBQW9CO1NBQ3ZCO0tBQ0osQ0FBQztHQUNXLGlCQUFpQixDQUFJO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgY3JlYXRlQnV5aW5Sb3V0aW5nIH0gZnJvbSBcIi4vY3JlYXRlLWJ1eWluLnJvdXRlc1wiO1xuaW1wb3J0IHsgQ3JlYXRlQnV5aW5Db21wb25lbnQgfSBmcm9tIFwiLi9jcmVhdGUtYnV5aW4uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBjcmVhdGVCdXlpblJvdXRpbmdcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDcmVhdGVCdXlpbkNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQnV5aW5Nb2R1bGUgeyB9Il19