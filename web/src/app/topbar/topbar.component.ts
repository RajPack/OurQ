import { Component, OnInit, Input, OnChanges, ViewEncapsulation } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router, NavigationEnd, Event, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import { GeoLocationService } from "../services/geolocation.service";
declare const google: any;
let geoCoder: any;

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class TopBarComponent implements OnInit, OnChanges {
    topbarSearchForm: FormGroup;
    topbarLocationForm: FormGroup;
    @Input() showMinimalSearch: boolean;
    searchPlaceHolderVal: string;
    isHomePage: boolean;
    locationValue: any = [];
    locationList: any;
    locationDetected: boolean = false;
    // geoCoder: any;

    constructor(private fb: FormBuilder,
        private router: Router,
        private geoService: GeoLocationService) {
        this.initiateForm();

        this.router.events.filter((event) => {
            return (event instanceof NavigationEnd) ? true : false;
        }).subscribe((event: NavigationEnd) => {
            this.isHomePage = (event.url.indexOf('/home') === 0) ?
                true : ((event.urlAfterRedirects.indexOf('/home') === 0) ?
                    true : false);
            this.searchPlaceHolderVal = (event.url.indexOf('/kiosk/') === 0) ?
                "Search Menu here..." :
                "Search Counters & Dishes here...";
        });
    }

    ngOnInit() {
        this.geoService.locationRetriever().subscribe((data) => {           
            geoCoder = new google.maps.Geocoder();
            this.geoCodelatlang((function (addr) {
                this.locationValue = addr;
                let addComp = this.locationValue["address_components"];
                for(let i = 0; i < addComp.length; i++){
                    for(let key in this.geoService.locationMap){
                        if(key.toLowerCase() === addComp[i].long_name.toLowerCase()){
                            this.locationList = this.geoService.locationMap[key];
                            this.locationDetected = true;
                        }
                    }
                }
                return addr;
            }).bind(this), data);
            // this.topbarLocationForm.setValue({ location: this.locationValue });
        })
    }

    onSubmit() {
        let location: string, searchVal: string;

        location = this.topbarLocationForm.get('location').value;
        searchVal = this.topbarSearchForm.get('search').value;
    }

    initiateForm() {
        this.topbarSearchForm = this.fb.group({
            search: ['', Validators.required]
        });

        this.topbarLocationForm = this.fb.group({
            location: ['', Validators.required]
        });
    }

    ngOnChanges() {
        console.log("Top Bar Component changed");
    }

    autoCompleteCallback1(selecteddata: any) {
        console.log(selecteddata);
    }

    geoCodelatlang(callback, data) {
        let latlng = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
        if (geoCoder) {
            geoCoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        callback(results[0]);
                    } else {
                        callback(["No results found"])
                    }
                } else {
                    callback(["Geocoder failed due to: " + status]);
                }
            });
        }
    }
}