"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
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
            common_1.CommonModule,
            create_buyin_routes_1.createBuyinRouting
        ],
        declarations: [
            create_buyin_component_1.CreateBuyinComponent
        ]
    })
], CreateBuyinModule);
exports.CreateBuyinModule = CreateBuyinModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWJ1eWluLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1idXlpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBRS9DLDZEQUEyRDtBQUMzRCxtRUFBZ0U7QUFXaEUsSUFBYSxpQkFBaUI7SUFBOUI7SUFBaUMsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUFsQyxJQUFrQztBQUFyQixpQkFBaUI7SUFUN0IsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wscUJBQVk7WUFDWix3Q0FBa0I7U0FDckI7UUFDRCxZQUFZLEVBQUU7WUFDViw2Q0FBb0I7U0FDdkI7S0FDSixDQUFDO0dBQ1csaUJBQWlCLENBQUk7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgY3JlYXRlQnV5aW5Sb3V0aW5nIH0gZnJvbSBcIi4vY3JlYXRlLWJ1eWluLnJvdXRlc1wiO1xuaW1wb3J0IHsgQ3JlYXRlQnV5aW5Db21wb25lbnQgfSBmcm9tIFwiLi9jcmVhdGUtYnV5aW4uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIGNyZWF0ZUJ1eWluUm91dGluZ1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIENyZWF0ZUJ1eWluQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVCdXlpbk1vZHVsZSB7IH0iXX0=