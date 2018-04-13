import { Component, AfterViewInit, ChangeDetectorRef, ViewChild, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import {isAndroid} from "platform";
import { SearchBar } from "ui/search-bar";

import { QlessSideBar } from "../sideBar/sidebar";
import { Observable } from "rxjs/Observable";
import { KioskModel } from "../models/kioskModel";

@Component({
    selector: "app-home",
    styleUrls: ['./home/home.component.css'],
    templateUrl: "./home/home.component.html"
})
export class HomeComponent implements AfterViewInit, OnInit {
    @ViewChild(RadSideDrawerComponent) sideDrawerComponent: RadSideDrawerComponent;
    kiosks: KioskModel[];
    sideDrawer: QlessSideBar;
    radSDzIndex = 1;
    showFilters: boolean;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private changeDetectionRef: ChangeDetectorRef){

    }
    ngOnInit(){
        this.showFilters = false;
        this.activatedRoute.data.subscribe((data)=>{
            console.log("resolving");
            this.kiosks = data.kiosks;
        })
    }
    disableSearchFocus(args){
        if(isAndroid) {
            let searchBar: SearchBar = args.object;
            searchBar.android.clearFocus();
        }
    }
    toggleSideBar(){
        
    }
    ngAfterViewInit(){
        this.sideBarInit(this.sideDrawerComponent.sideDrawer);
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
    toggleFilters(){
        this.sideDrawer.close();
        this.showFilters = !this.showFilters;
    }
    onSearchChange(args) {

    }
    onSearchClear(args) {

    }
    onSearchSubmit(args) {
        
    }
}
