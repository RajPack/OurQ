import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { CategorizedItem, KioskItem } from "../models/kioskItemModel";
import { KioskItemsService } from "./kiosksItems.service";

@Injectable()
export class KioskItemResolver implements Resolve<Observable<KioskItem[]>> {

    constructor(private router: Router, private service: KioskItemsService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<KioskItem[]> {
        let kioskId = route.paramMap.get('id');
        return this.service.getKioskItemsbyId(kioskId);
    }
}