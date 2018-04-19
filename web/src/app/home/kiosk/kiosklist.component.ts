import { Component, OnInit, HostBinding, style, OnDestroy, Output } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { KioskModel } from "../../models/kioskModel";
import { slideInDownAnimation } from "../../animations/animations";
import { EventEmitter } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
    selector: 'app-kiosklist',
    templateUrl: './kiosklist.component.html',
    styleUrls: ['./kiosklist.component.css'],
    animations: [slideInDownAnimation]
})

export class KioskListComponent implements OnInit, OnDestroy {
    kiosks: KioskModel[];
    // @HostBinding('@routeAnimation') routeAnimation = true;
    // @HostBinding('style.display') display = 'block';
    // @HostBinding('style.position') position = 'absolute';

    constructor(private router: Router, 
                private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.activatedRoute.data.subscribe((val) => {
            this.kiosks = val.kiosks;
        });        
    }

    ngOnDestroy() {
        console.log('Kiosk list component destroyed');
    }

}