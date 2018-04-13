
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable } from 'rxjs/Observable';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { Component, OnInit,  ViewChild, AfterViewInit, ChangeDetectorRef, TemplateRef } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Router } from "@angular/router";
import { QlessSideBar } from "../sideBar/sidebar";
import { KioskItemsService } from "../services/kiosksItems.service";
import { KioskItem } from "../models/kioskItemModel";



@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit, AfterViewInit {
    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
    private sideDrawer: QlessSideBar;
    private radSDzIndex = 1;
    private totalcartCount = 0;
    private totalPrice = 0;
    private isLoading = false;
    items: Observable<KioskItem[]>;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: KioskItemsService, private router: Router, private changeDetectionRef: ChangeDetectorRef) {
        this.isLoading = true;
        setTimeout(()=>{
            this.isLoading = false;
        },1000);
     }
    ngOnInit(): void {
        this.items = this.itemService.getKioskItemsbyId("123");
    }
    ngAfterViewInit(){
        this.sideBarInit(this.drawerComponent.sideDrawer);
    }
    addtoCart(item: Item) {
        item.cartCount ++;
        this.totalcartCount ++;
        console.log(this.totalcartCount);
        this.totalPrice += 60;
    }
    removeFromCart(item: Item){
        item.cartCount --;
        this.totalcartCount --;
        this.totalPrice -= 60;
    }
    sideBarInit(drawer: RadSideDrawer){
        this.sideDrawer = new QlessSideBar(drawer);
        this.sideDrawer.onOpening(()=>{
            this.radSDzIndex = 4;
            this.changeDetectionRef.detectChanges();
        });
        this.sideDrawer.onClosing(()=>{
            this.radSDzIndex = 1;
            this.changeDetectionRef.detectChanges();
        });
    }
}