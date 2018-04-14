import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Filter } from "../models/filterModel";

@Injectable()
export class FilterService {
    constructor(){}

    getFilterList() {
        let filterObservable: Observable<any> = Observable.create((observer: Observer<Filter[]>)=>{
            observer.next(sampleFilterData);
            observer.complete();
        });
        return filterObservable;
    }
}



const sampleFilterData: Filter[] = [
    {
        filterCategory: "Preferences",
        options: [
            { name: "Veg Only", checked: false},
            { name: "Non Veg Only", checked: false},
            { name: "Egg Only", checked: false}
        ]
    },
    {
        filterCategory: "Building",
        options: [
            { name: "Building 50", checked: false},
            { name: "Building 28", checked: false},
            { name: "Building 18", checked: false},
            { name: "Building 10", checked: false},
            { name: "Building 25", checked: false},
            { name: "Building 42", checked: false}
        ]
    },
    {
        filterCategory: "Cuisine",
        options: [
            { name: "South Indian", checked: false},
            { name: "North Indian", checked: false},
            { name: "Punjabi", checked: false},
            { name: "Andhra cuisine", checked: false},
            { name: "Italian", checked: false},
            { name: "Chinese", checked: false}
        ]
    }
]