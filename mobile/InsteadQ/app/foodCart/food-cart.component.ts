import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    templateUrl: "./foodCart/food-cart.component.html",
    styleUrls: ['./foodCart/food-cart.component.css'],
    selector: 'app-food-cart'
})
export class FoodCartComponent {

    constructor(private router: Router, private rotuerExt: RouterExtensions){

    }
    navBack(){
        this.rotuerExt.back();
    }
}