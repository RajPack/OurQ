import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router, NavigationEnd, Event } from "@angular/router";
import { GenericService } from "../services/generic.service";
import { Observable } from 'rxjs/Observable';

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
    styledata: any;

    constructor(private fb: FormBuilder, private service: GenericService) {
        this.initiateForm();

        this.service.placeholderObs.subscribe((value: boolean) => {
            this.isHomePage = !value;
            this.searchBarActivity();
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

    searchBarActivity() {
        (this.isHomePage) ? this.searchPlaceHolderVal = "Search here..." :
            this.searchPlaceHolderVal = "Search Menu here...";
        
        (this.isHomePage) ? (this.styledata = {'margin-top': '5%', 'margin-bottom': '2%'}) :
                (this.styledata = {'margin-top': '5%', 'margin-bottom': '2%', 'margin-left': '10%'});
        console.log("what" + this.styledata);
    }
}