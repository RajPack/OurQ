import { Component, OnInit } from "@angular/core";
import { FilterService } from "../services/filter.service";
import { Observable } from "rxjs/Observable";
import { Filter } from "../models/filterModel";

@Component({
    templateUrl: './filters/filter.component.html',
    selector: 'filter-widget',
    styleUrls: ['./filters/filter.component.css']
})
export class FilterComponent implements OnInit{
    listObservable: Observable<Filter[]>
    constructor(private filterService: FilterService){

    }
    ngOnInit(){
        this.listObservable = this.filterService.getFilterList();
    }
    onOptionChecked(args){

    }
}