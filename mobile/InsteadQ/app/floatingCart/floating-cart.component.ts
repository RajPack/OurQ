import { Component, Input, OnChanges } from "@angular/core";
import { AndroidData } from "nativescript-ng-shadow";

@Component({
    selector: 'app-floating-cart',
    templateUrl: './floatingCart/floating-cart.component.html',
    styleUrls:['./floatingCart/floating-cart.component.css']
})
export class FloatingCartComponent implements OnChanges {
    @Input() numberOfItems: number;
    @Input() price: number;

    private itemsText = "";
    fabShadow: AndroidData = {
        elevation: 24,
        bgcolor: '#32CD32',
        cornerRadius: 4,
        translationZ: 30
      }
    constructor(){
        
    }

    ngOnChanges(){
        this.itemsText = String(this.numberOfItems); 
        this.itemsText += (this.numberOfItems>1 ? " Items" : " Item") + " in your cart" ;
    }

}