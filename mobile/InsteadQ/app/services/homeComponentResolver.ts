import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { KioskModel } from "../models/kioskModel";
import { KioskService } from "./kiosks.service";


@Injectable()
export class HomeComponentResolver implements Resolve<Observable<KioskModel[]>> {
    constructor(private kioskService: KioskService){

    }
    resolve(){
        console.log("Inside resolver");
        return this.kioskService.getHomePageKiosks();
    }

}