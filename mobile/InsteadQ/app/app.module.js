"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var http_client_1 = require("nativescript-angular/http-client");
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
var kiosksItems_service_1 = require("./services/kiosksItems.service");
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
                http_client_1.NativeScriptHttpClientModule,
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
                filter_service_1.FilterService,
                kiosksItems_service_1.KioskItemsService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGdGQUE4RTtBQUM5RSw4REFBcUY7QUFDckYsZ0VBQWdGO0FBQ2hGLGlFQUF3RDtBQUV4RCw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLG9EQUFrRDtBQUNsRCwwREFBd0Q7QUFDeEQsc0VBQW1FO0FBQ25FLHNFQUFtRTtBQUNuRSxpRUFBK0Q7QUFDL0Qsa0ZBQStFO0FBQy9FLHdEQUFzRDtBQUd0RCwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXZFLGtEQUFtRTtBQUNwRSw0REFBeUQ7QUFDekQsK0RBQTZEO0FBQzdELDREQUEwRDtBQUMxRCxzRUFBbUU7QUFzQ25FO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXBDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw2QkFBc0I7Z0JBQ3RCLDBDQUE0QjtnQkFDNUIsOEJBQWdCO2dCQUNoQix3Q0FBOEI7Z0JBQzlCLGlDQUF3QjtnQkFDeEIsdUNBQWM7YUFDakI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2QsMkNBQW1CO2dCQUNuQixrQ0FBZTtnQkFDZix1Q0FBaUI7Z0JBQ2pCLCtDQUFxQjtnQkFDckIsa0NBQWU7YUFDbEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsNkJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsdUNBQWlCO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBOZ1NoYWRvd01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZy1zaGFkb3cnO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGb29kQ2FydENvbXBvbmVudCB9IGZyb20gXCIuL2Zvb2RDYXJ0L2Zvb2QtY2FydC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9yZGVyc0NvbXBvbmVudCB9IGZyb20gXCIuL29yZGVyQ2FydC9vcmRlcnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGbG9hdGluZ0NhcnRDb21wb25lbnQgfSBmcm9tIFwiLi9mbG9hdGluZ0NhcnQvZmxvYXRpbmctY2FydC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5cblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBLaW9za1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9raW9za3Muc2VydmljZVwiO1xuaW1wb3J0IHsgRmlsdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZmlsdGVycy9maWx0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZmlsdGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7IEtpb3NrSXRlbXNTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMva2lvc2tzSXRlbXMuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmdTaGFkb3dNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBPcmRlcnNDb21wb25lbnQsXG4gICAgICAgIEZvb2RDYXJ0Q29tcG9uZW50LFxuICAgICAgICBGbG9hdGluZ0NhcnRDb21wb25lbnQsXG4gICAgICAgIEZpbHRlckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEl0ZW1TZXJ2aWNlLFxuICAgICAgICBLaW9za1NlcnZpY2UsXG4gICAgICAgIEZpbHRlclNlcnZpY2UsXG4gICAgICAgIEtpb3NrSXRlbXNTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19