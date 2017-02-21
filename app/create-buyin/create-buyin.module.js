"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJ1eWluLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1idXlpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBEQUFtRTtBQUNuRSxvREFBcUU7QUFDckUsc0NBQXlDO0FBRXpDLDZEQUEyRDtBQUMzRCxtRUFBZ0U7QUFZaEUsSUFBYSxpQkFBaUI7SUFBOUI7SUFBaUMsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUFsQyxJQUFrQztBQUFyQixpQkFBaUI7SUFWN0IsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsNkJBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qix3Q0FBa0I7U0FDckI7UUFDRCxZQUFZLEVBQUU7WUFDViw2Q0FBb0I7U0FDdkI7S0FDSixDQUFDO0dBQ1csaUJBQWlCLENBQUk7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBjcmVhdGVCdXlpblJvdXRpbmcgfSBmcm9tIFwiLi9jcmVhdGUtYnV5aW4ucm91dGVzXCI7XG5pbXBvcnQgeyBDcmVhdGVCdXlpbkNvbXBvbmVudCB9IGZyb20gXCIuL2NyZWF0ZS1idXlpbi5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIGNyZWF0ZUJ1eWluUm91dGluZ1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIENyZWF0ZUJ1eWluQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVCdXlpbk1vZHVsZSB7IH0iXX0=