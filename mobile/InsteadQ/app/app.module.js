"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var food_cart_component_1 = require("./foodCart/food-cart.component");
var orders_component_1 = require("./orderCart/orders.component");
var floating_cart_component_1 = require("./floatingCart/floating-cart.component");
var home_component_1 = require("./home/home.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
var http_1 = require("nativescript-angular/http");
var kiosks_service_1 = require("./services/kiosks.service");
var filter_component_1 = require("./filters/filter.component");
var filter_service_1 = require("./services/filter.service");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                http_1.NativeScriptHttpModule,
                app_routing_1.AppRoutingModule,
                angular_1.NativeScriptUISideDrawerModule,
                common_1.NativeScriptCommonModule,
                nativescript_ng_shadow_1.NgShadowModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                orders_component_1.OrdersComponent,
                food_cart_component_1.FoodCartComponent,
                floating_cart_component_1.FloatingCartComponent,
                filter_component_1.FilterComponent
            ],
            providers: [
                item_service_1.ItemService,
                kiosks_service_1.KioskService,
                filter_service_1.FilterService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGdGQUE4RTtBQUM5RSw4REFBcUY7QUFDckYsaUVBQXdEO0FBRXhELDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsc0VBQW1FO0FBQ25FLGlFQUErRDtBQUMvRCxrRkFBK0U7QUFDL0Usd0RBQXNEO0FBR3RELDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFdkUsa0RBQW1FO0FBQ3BFLDREQUF5RDtBQUN6RCwrREFBNkQ7QUFDN0QsNERBQTBEO0FBb0MxRDtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFsQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsNkJBQXNCO2dCQUN0Qiw4QkFBZ0I7Z0JBQ2hCLHdDQUE4QjtnQkFDOUIsaUNBQXdCO2dCQUN4Qix1Q0FBYzthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixnQ0FBYztnQkFDZCwyQ0FBbUI7Z0JBQ25CLGtDQUFlO2dCQUNmLHVDQUFpQjtnQkFDakIsK0NBQXFCO2dCQUNyQixrQ0FBZTthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVztnQkFDWCw2QkFBWTtnQkFDWiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgTmdTaGFkb3dNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmctc2hhZG93JztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRm9vZENhcnRDb21wb25lbnQgfSBmcm9tIFwiLi9mb29kQ2FydC9mb29kLWNhcnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmRlcnNDb21wb25lbnQgfSBmcm9tIFwiLi9vcmRlckNhcnQvb3JkZXJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmxvYXRpbmdDYXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vZmxvYXRpbmdDYXJ0L2Zsb2F0aW5nLWNhcnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuXG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgS2lvc2tTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMva2lvc2tzLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gXCIuL2ZpbHRlcnMvZmlsdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2ZpbHRlci5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBOZ1NoYWRvd01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgICAgIE9yZGVyc0NvbXBvbmVudCxcbiAgICAgICAgRm9vZENhcnRDb21wb25lbnQsXG4gICAgICAgIEZsb2F0aW5nQ2FydENvbXBvbmVudCxcbiAgICAgICAgRmlsdGVyQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2UsXG4gICAgICAgIEtpb3NrU2VydmljZSxcbiAgICAgICAgRmlsdGVyU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==