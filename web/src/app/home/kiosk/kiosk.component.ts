import { Component, OnInit, OnChanges } from "@angular/core";
import { KioskItemsService } from "../../services/kiosksItems.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { KioskItem, CategorizedItem } from "../../models/kioskItemModel";
import { KioskModel } from "../../models/kioskModel";
import { KioskService } from "../../services/kiosks.service";
import 'rxjs/add/operator/switchMap';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-kiosk',
    templateUrl: './kiosk.component.html',
    styleUrls: ['./kiosk.component.css']
})

export class KioskComponent implements OnInit, OnChanges {
    items: KioskItem[];
    categorizedItems: CategorizedItem[];
    kioskObservable: Observable<KioskModel>;
    kiosk: KioskModel;
    clickedId: any;

    constructor(private itemService: KioskItemsService, 
                private router: Router,
                private route: ActivatedRoute,
                private kioskService: KioskService) {

    }

    ngOnInit() {
        this.kioskObservable = this.route.paramMap.switchMap((params: ParamMap) => {
            return this.kioskService.getKiosk(params.get('id'));
        });
        
        this.kioskObservable.subscribe((val) => {
            this.kiosk = val;
        });
        
        this.route.data.subscribe((data) => {
            this.items = data.kiosk;
        });
        this.categorizedItems = this.itemService.categorizeItems(this.items);
    }

    ngOnChanges() {
        
    }

    addBtnOperation(item: KioskItem, args) {
        this.clickedId = args.target.id;
        item.cartCount = (item.cartCount === undefined) ? 1 : (item.cartCount++);
    }
}