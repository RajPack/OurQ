import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { FoodCartComponent } from "./foodCart/food-cart.component";
import { OrdersComponent } from "./orderCart/orders.component";
import { HomeComponent } from "./home/home.component";
import { HomeComponentResolver } from "./services/homeComponentResolver";

const routes: Routes = [
    { path: "", component: HomeComponent, resolve:{kiosks: HomeComponentResolver} },
    { path: "foodCart", component: FoodCartComponent},
    { path: "orders", component: OrdersComponent},
    { path: "items/:kioskId", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    providers:[
        HomeComponentResolver
    ]
})
export class AppRoutingModule { }