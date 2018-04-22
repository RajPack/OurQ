import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observer } from 'rxjs/Observer';

declare const google: any;

@Injectable()
export class GeoLocationService {
    private locationData: any;
    private geoCoder: any;
    locationMap = {
        bengaluru: [{ name: 'Bengaluru DC' },
                    { name: 'Bengaluru MNC' },
                    { name: 'Bengaluru Continental' }],
        pune: [{ name: 'Pune DC' },
               { name: 'Mumbai DC' }]
    }
   
    constructor() {

    }

    locationRetriever(): Observable<any> {

        return Observable.create((observer => {
            if(window.navigator && window.navigator.geolocation){
                window.navigator.geolocation.getCurrentPosition((data) => {
                    observer.next(data);
                    observer.complete();
                })
            }else {
                observer.error('Unsupported Browser');
            }
        }));
    }

    geoCodelatlang(callback, data) {
        let latlang = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
        if(this.geoCoder){
            this.geoCoder.geocode({ latLng: latlang }, function (results, status) {
                if(status === google.maps.GeocoderStatus.OK) {
                    if(results[0]) {
                        console.log(results);
                        callback(results[0]);
                    }else {
                        console.log('No Result Found');
                        callback(["No results found"])
                    }
                }else {
                    console.log('Failed');
                    callback(["Geocoder failed due to: " + status]);
                }
            });
        }
    }
}

