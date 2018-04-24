import { Component, OnInit, Input, OnChanges, ViewEncapsulation, ChangeDetectorRef, Output, EventEmitter } from "@angular/core";
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
    @Output() detectedLocationList: any = new EventEmitter<any>();
    locationList: any;
    locationDetected: boolean = false;
    locationCount: number = 0;
    locationClass: string = "";
    mainClassString: string = "iqLocationSpanInput iqLocationPadding col-8";
    locationKey: string;

    constructor(private fb: FormBuilder,
        private router: Router,
        private geoService: GeoLocationService,
        private changeDetRef: ChangeDetectorRef) {
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
        this.goeCodeRetriver();
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

    goeCodeRetriver() {
        this.locationDetected = true;
        this.geoService.locationRetriever().subscribe((data) => {       
            geoCoder = new google.maps.Geocoder();
            this.geoCodelatlang((function (addr) {
                this.locationValue = addr;
                let addComp = this.locationValue["address_components"];
                for(let i = 0; i < addComp.length; i++){
                    for(let key in this.geoService.locationMap){
                        if(key.toLowerCase() === addComp[i].long_name.toLowerCase()){
                            this.locationKey = key.toUpperCase();
                            this.locationList = this.geoService.locationMap[key].map((data) => {
                                return data;
                            });
                            this.locationDetected = true;
                            this.locationCount = this.locationList.length;
                            this.classCalculator(this.locationCount);
                            console.log("GeoLocation Ended");
                            this.detectedLocationList.emit({listval: this.locationList, listkey: this.locationKey});
                            this.changeDetRef.detectChanges();
                        }
                    }
                }
                return addr;
            }).bind(this), data);
        })
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

    classCalculator(count: number) {
        let defString = "iqLocationSpanInput iqLocationPadding";
        (count > 0) ? (this.mainClassString = ( defString + " col-11")) : 
                      (this.mainClassString = ( defString + " col-8"));
    }

    locationRemove(args: any, id: any) {
        this.locationList.splice(id, 1);
        this.locationCount = this.locationCount - 1;
        if(this.locationCount < 1){
            this.classCalculator(this.locationCount);
            this.locationDetected = !this.locationDetected;
        }
        this.detectedLocationList.emit({listval: this.locationList, listkey: this.locationKey});
        this.changeDetRef.detectChanges();
    }

    onLocationSubmit() {
        console.log("GeoLocation Started");
        this.goeCodeRetriver();
    }
}