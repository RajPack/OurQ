import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { KioskItem, CategorizedItem } from "../models/kioskItemModel";

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
    categorizeItems(items: KioskItem[]){
        let categorizedItems: CategorizedItem[] = [];
        items.map((item)=>{
            this.createCategory(categorizedItems, item);            
            let matchCategory = this.fetchMatchCategory(categorizedItems, item);
            matchCategory.items.push(item);
        });
        return categorizedItems;
    }

    private createCategory(categorizedItems: CategorizedItem[], item:KioskItem ) {
        let categoryPresent = false;
        for(let category of categorizedItems){
            categoryPresent =   category.name === item.category;
            if(categoryPresent){break;}
          }
          if(!categoryPresent){
              categorizedItems.push({name: item.category, items: []});
          }
    }
    private fetchMatchCategory(categorizedItems: CategorizedItem[], item: KioskItem){
        let filteredArr = categorizedItems.filter((category)=>{
            if(category.name === item.category){
                return category;
            }
        });
        return filteredArr[0];
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
        additionalInfo: "Rice, Sambar, Rasam, Vegetables, Curd",
        servingNow: false,
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
    },
    {
        id: "asb1",
        name: "Naan",
        price: 20,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Breads"
    },
    {
        id: "asb1",
        name: "Roti",
        price: 12,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Breads"
    },
    {
        id: "asb1",
        name: "Kulcha",
        price: 20,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Breads"
    },
    {
        id: "asb1",
        name: "Veg Roll",
        price:50,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Rolls"
    },
    {
        id: "asb1",
        name: "Paneer Rool",
        price:60,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Rolls"
    },
    {
        id: "asb1",
        name: "Chicken Roll",
        price:60,
        veg: false,
        additionalInfo: "",
        servingNow: true,
        category: "Rolls"
    },
    {
        id: "asb1",
        name: "Chocolate IceCream",
        price: 60,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Deserts"
    },
    {
        id: "asb1",
        name: "Vanilla IceCream",
        price:50,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Deserts"
    },
    {
        id: "asb1",
        name: "ButterStoch IceCream",
        price:60,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Deserts"
    },
    {
        id: "asb1",
        name: "Falooda",
        price:70,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Deserts"
    },
    {
        id: "asb1",
        name: "Jamoon",
        price:15,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Sweets"
    },
    {
        id: "asb1",
        name: "Rasagolla",
        price:20,
        veg: true,
        additionalInfo: "",
        servingNow: true,
        category: "Sweets"
    },
    {
        id: "asb1",
        name: "Fish Meal",
        price:100,
        veg: false,
        additionalInfo: "",
        servingNow: true,
        category: "Dinner"
    },
    {
        id: "asb1",
        name: "Chicken Kebab",
        price:90,
        veg: false,
        additionalInfo: "",
        servingNow: true,
        category: "Dinner"
    },
    {
        id: "asb1",
        name: "Chicken Tandoori",
        price:90,
        veg: false,
        additionalInfo: "",
        servingNow: true,
        category: "Dinner"
    }

]