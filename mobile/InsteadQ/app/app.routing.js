"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var food_cart_component_1 = require("./foodCart/food-cart.component");
var orders_component_1 = require("./orderCart/orders.component");
var home_component_1 = require("./home/home.component");
var homeComponentResolver_1 = require("./services/homeComponentResolver");
var routes = [
    { path: "", component: home_component_1.HomeComponent, resolve: { kiosks: homeComponentResolver_1.HomeComponentResolver } },
    { path: "foodCart", component: food_cart_component_1.FoodCartComponent },
    { path: "orders", component: orders_component_1.OrdersComponent },
    { path: "items/:kioskId", component: items_component_1.ItemsComponent },
    { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule],
            providers: [
                homeComponentResolver_1.HomeComponentResolver
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSxzRUFBbUU7QUFDbkUsaUVBQStEO0FBQy9ELHdEQUFzRDtBQUN0RCwwRUFBeUU7QUFFekUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLE9BQU8sRUFBQyxFQUFDLE1BQU0sRUFBRSw2Q0FBcUIsRUFBQyxFQUFFO0lBQy9FLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUM7SUFDakQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO0lBQzdDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7Q0FDdkQsQ0FBQztBQVNGO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFQNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1lBQ25DLFNBQVMsRUFBQztnQkFDTiw2Q0FBcUI7YUFDeEI7U0FDSixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGb29kQ2FydENvbXBvbmVudCB9IGZyb20gXCIuL2Zvb2RDYXJ0L2Zvb2QtY2FydC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9yZGVyc0NvbXBvbmVudCB9IGZyb20gXCIuL29yZGVyQ2FydC9vcmRlcnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudFJlc29sdmVyIH0gZnJvbSBcIi4vc2VydmljZXMvaG9tZUNvbXBvbmVudFJlc29sdmVyXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCByZXNvbHZlOntraW9za3M6IEhvbWVDb21wb25lbnRSZXNvbHZlcn0gfSxcbiAgICB7IHBhdGg6IFwiZm9vZENhcnRcIiwgY29tcG9uZW50OiBGb29kQ2FydENvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcIm9yZGVyc1wiLCBjb21wb25lbnQ6IE9yZGVyc0NvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcIml0ZW1zLzpraW9za0lkXCIsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBIb21lQ29tcG9uZW50UmVzb2x2ZXJcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19