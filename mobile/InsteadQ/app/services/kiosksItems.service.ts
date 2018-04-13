import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { KioskItem } from "../models/kioskItemModel";

@Injectable()
export class KioskItemsService {
    constructor(){}
    getKioskItemsbyId(id: string): Observable<KioskItem[]>{
        let itemsObservable: Observable<KioskItem[]> = Observable.create((observer)=>{
            observer.next(sampleItems);
            observer.complete();
        });
        return itemsObservable;
    }
}


const sampleItems = [
    {
        id: "asb1",
        name: "Masala Dosa",
        price: 50,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Breakfast"
    },
    {
        id: "asb1",
        name: "Plain Dosa",
        price: 30,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Breakfast"
    },
    {
        id: "asb1",
        name: "Set Dosa",
        price: 40,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Breakfast"
    },
    {
        id: "asb1",
        name: "Poori",
        price: 50,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Breakfast"
    },
    {
        id: "asb1",
        name: "Veg Meal",
        price: 70,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Lunch"
    },
    {
        id: "asb1",
        name: "Chicken Meal",
        price: 90,
        veg: false,
        additionalInfo: "",
        servingNow: true,
        category: "Lunch"
    },
    {
        id: "asb1",
        name: "Veg Fried Rice",
        price: 50,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Lunch"
    },
    {
        id: "asb1",
        name: "Chicken Fried Rice",
        price: 70,
        veg: false,
        additionalInfo: "",
        servingNow: true,
        category: "Lunch"
    },
    {
        id: "asb1",
        name: "Gobi Fry",
        price: 60,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Lunch"
    }
]