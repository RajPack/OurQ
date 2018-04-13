"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var FoodCartComponent = /** @class */ (function () {
    function FoodCartComponent(router, rotuerExt) {
        this.router = router;
        this.rotuerExt = rotuerExt;
    }
    FoodCartComponent.prototype.navBack = function () {
        this.rotuerExt.back();
    };
    FoodCartComponent = __decorate([
        core_1.Component({
            templateUrl: "./foodCart/food-cart.component.html",
            styleUrls: ['./foodCart/food-cart.component.css'],
            selector: 'app-food-cart'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions])
    ], FoodCartComponent);
    return FoodCartComponent;
}());
exports.FoodCartComponent = FoodCartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vZC1jYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvb2QtY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLHNEQUErRDtBQU8vRDtJQUVJLDJCQUFvQixNQUFjLEVBQVUsU0FBMkI7UUFBbkQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRXZFLENBQUM7SUFDRCxtQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBUFEsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDUCxXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1lBQ2pELFFBQVEsRUFBRSxlQUFlO1NBQzVCLENBQUM7eUNBRzhCLGVBQU0sRUFBcUIseUJBQWdCO09BRjlELGlCQUFpQixDQVE3QjtJQUFELHdCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Zvb2RDYXJ0L2Zvb2QtY2FydC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZm9vZENhcnQvZm9vZC1jYXJ0LmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHNlbGVjdG9yOiAnYXBwLWZvb2QtY2FydCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvb2RDYXJ0Q29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdHVlckV4dDogUm91dGVyRXh0ZW5zaW9ucyl7XHJcblxyXG4gICAgfVxyXG4gICAgbmF2QmFjaygpe1xyXG4gICAgICAgIHRoaXMucm90dWVyRXh0LmJhY2soKTtcclxuICAgIH1cclxufSJdfQ==