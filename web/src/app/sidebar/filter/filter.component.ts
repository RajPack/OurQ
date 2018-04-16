import { Component, OnInit } from "@angular/core";
import { FilterService } from "../../services/filter.service";
import { Observable } from "rxjs/Observable";
import { Filter, FilterOptions } from "../../models/filterModel";

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
    filterListObservable: Observable<Filter[]>
    constructor(private service: FilterService) {

    }

    ngOnInit() {
        this.filterListObservable = this.service.getFilterList();
    }

    onCheckBoxChange(args, option?: FilterOptions){
        (option) ? (option.checked = args.target.checked) : (console.log('Veg Only'));
        console.log(args);
    }
}