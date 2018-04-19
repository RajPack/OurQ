import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router, NavigationEnd, Event, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css']
})

export class TopBarComponent implements OnInit, OnChanges {
    topbarSearchForm: FormGroup;
    topbarLocationForm: FormGroup;
    @Input() showMinimalSearch: boolean;
    searchPlaceHolderVal: string;
    isHomePage: boolean;

    constructor(private fb: FormBuilder, private router: Router) {
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
}