import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { KioskModel } from "../models/kioskModel";
import { KioskItem } from "../models/kioskItemModel";
import 'rxjs/add/operator/map';

@Injectable()
export class KioskService {

    constructor(){

    }
    getHomePageKiosks(){

        let homeObservable = Observable.create((observer)=>{
            console.log("inside service");
            observer.next([...dummyKioskData/*, ...dummyKioskData, ...dummyKioskData*/]);
            observer.complete();
        });

        return homeObservable;
    }

    getKiosk(id: any) {
        return this.getHomePageKiosks().map((val) => {
            return val.find(kiosk => kiosk.id === id);
        });
    }
}


const dummyKioskData: KioskModel[] = [
    {
        id: "123",
        name: "Dosa Corner",
        subLocation: "Building 10",
        address: "Infosys campus - ECity",
        cousines: ["South Indian", "Andra"],
        desc: "Dosa, Idly, Vada and other breakfast services",
        vegan: true,
        timings: "08:00 AM to 11:00 AM",
        imageURL: "http://wcmimages.vancouversun.com/images?url=https://postmediavancouversun2.files.wordpress.com/2017/12/1207-davie-dosa-3-jpg.jpg&w=840&h=630"
    },
    {
        id: "456",
        name: "IceCream Corner",
        subLocation: "Building 10",
        address: "Infosys campus - ECity",
        cousines: ["South Indian", "Andra"],
        desc: "Dosa, Idly, Vada and other breakfast services",
        vegan: true,
        timings: "08:00 AM to 11:00 AM",
        imageURL: "http://www.daytonaradio.com/wkro/wp-content/uploads/sites/4/2015/07/ice-cream.jpg"
    },
    {
        id: "789",
        name: "Meal Corner",
        subLocation: "Building 10",
        address: "Infosys campus - ECity",
        cousines: ["South Indian", "Andra"],
        desc: "Dosa, Idly, Vada and other breakfast services",
        vegan: true,
        timings: "08:00 AM to 11:00 AM",
        imageURL: "https://i2.wp.com/media.hungryforever.com/wp-content/uploads/2016/11/22170143/best-south-indian-meals-in-chennai.jpg?zoom=1.100000023841858&ssl=1?w=1269&strip=all&quality=80"
    },
    {
        id: "012",
        name: "Coffee Palace",
        subLocation: "Building 10",
        address: "Infosys campus - ECity",
        cousines: ["South Indian", "Andra"],
        desc: "Dosa, Idly, Vada and other breakfast services",
        vegan: true,
        timings: "08:00 AM to 11:00 AM",
        imageURL: "https://media-cdn.tripadvisor.com/media/photo-s/12/05/4b/94/20180203-144316-largejpg.jpg"
    },
    {
        id: "345",
        name: "Another boring Corner",
        subLocation: "Building 10",
        address: "Infosys campus - ECity",
        cousines: ["South Indian", "Andra"],
        desc: "Dosa, Idly, Vada and other breakfast services",
        vegan: true,
        timings: "08:00 AM to 11:00 AM",
        imageURL: "http://www.novelbenedictions.com/nb/wp-content/uploads/2013/07/cornerhousecounter.jpg"
    }
];