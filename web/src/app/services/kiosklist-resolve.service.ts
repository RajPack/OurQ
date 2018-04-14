import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { KioskModel } from "../models/kioskModel";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { KioskService } from "./kiosks.service";

@Injectable()
export class KioskListResolver implements Resolve<Observable<KioskModel[]>> {
    
    constructor(private service: KioskService, private router: Router) {

    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<KioskModel[]> {
        return this.service.getHomePageKiosks();
    }
}