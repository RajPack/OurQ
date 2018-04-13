"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(router, rotuerExt) {
        this.router = router;
        this.rotuerExt = rotuerExt;
    }
    OrdersComponent.prototype.navBack = function () {
        this.rotuerExt.back();
    };
    OrdersComponent = __decorate([
        core_1.Component({
            templateUrl: "./orderCart/orders.component.html",
            styleUrls: ['./orderCart/orders.component.css'],
            selector: 'app-orders'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLHNEQUErRDtBQU8vRDtJQUVJLHlCQUFvQixNQUFjLEVBQVUsU0FBMkI7UUFBbkQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRXZFLENBQUM7SUFDRCxpQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBUFEsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztZQUMvQyxRQUFRLEVBQUUsWUFBWTtTQUN6QixDQUFDO3lDQUc4QixlQUFNLEVBQXFCLHlCQUFnQjtPQUY5RCxlQUFlLENBUTNCO0lBQUQsc0JBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9vcmRlckNhcnQvb3JkZXJzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9vcmRlckNhcnQvb3JkZXJzLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHNlbGVjdG9yOiAnYXBwLW9yZGVycydcclxufSlcclxuZXhwb3J0IGNsYXNzIE9yZGVyc0NvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3R1ZXJFeHQ6IFJvdXRlckV4dGVuc2lvbnMpe1xyXG5cclxuICAgIH1cclxuICAgIG5hdkJhY2soKXtcclxuICAgICAgICB0aGlzLnJvdHVlckV4dC5iYWNrKCk7XHJcbiAgICB9XHJcbn0iXX0=