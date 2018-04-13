import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {  NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NgShadowModule } from 'nativescript-ng-shadow';

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { FoodCartComponent } from "./foodCart/food-cart.component";
import { OrdersComponent } from "./orderCart/orders.component";
import { FloatingCartComponent } from "./floatingCart/floating-cart.component";
import { HomeComponent } from "./home/home.component";


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

 import { NativeScriptHttpModule } from "nativescript-angular/http";
import { KioskService } from "./services/kiosks.service";
import { FilterComponent } from "./filters/filter.component";
import { FilterService } from "./services/filter.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptCommonModule,
        NgShadowModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ItemsComponent,
        ItemDetailComponent,
        OrdersComponent,
        FoodCartComponent,
        FloatingCartComponent,
        FilterComponent
    ],
    providers: [
        ItemService,
        KioskService,
        FilterService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
