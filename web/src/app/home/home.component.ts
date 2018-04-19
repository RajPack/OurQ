import { Component, OnInit, OnChanges } from "@angular/core";
import { ActivatedRoute, Router, Event } from "@angular/router";
import { KioskModel } from "../models/kioskModel";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnChanges {
    kiosks: KioskModel[];

    constructor(private route: ActivatedRoute) {
        
    }

    ngOnInit() {
        this.route.data.subscribe((value) => {
            this.kiosks = value.kiosks;
        });
    }

    ngOnChanges() {
        
    }
}