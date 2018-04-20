import { Injectable } from '@angular/core';
declare const google: any;

@Injectable()

export class GeoLocationService {

    locationRetriever() {
        navigator.geolocation.getCurrentPosition((data)=>{
            let geocoder = new google.maps.Geocoder();
            let latlang = new google.maps.LatLng(data.coords.latitude, 
                                data.coords.longitude);
            geocoder.geocode({latLng: latlang}, function(results, status){
                console.log(results[0].address_components[5].long_name);
                console.log(status);
                console.log(latlang);
                console.log(data.coords.latitude);
                console.log(data);
            })
            })
    }
}

const locationMap = {
    bengaluru: ['Bengaluru DC', 'Bengaluru MNC', 'Bengaluru Continental']
}

