import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    templateUrl: "./orderCart/orders.component.html",
    styleUrls: ['./orderCart/orders.component.css'],
    selector: 'app-orders'
})
export class OrdersComponent {

    constructor(private router: Router, private rotuerExt: RouterExtensions){

    }
    navBack(){
        this.rotuerExt.back();
    }
}