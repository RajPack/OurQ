import { Component, OnInit } from "@angular/core";
import { FilterService } from "../../services/filter.service";
import { Observable } from "rxjs/Observable";
import { Filter, FilterOptions } from "../../models/filterModel";
import { GenericService } from "../../services/generic.service";

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
    filterListObservable: Observable<Filter[]>
    isHomePage: boolean;

    constructor(private service: FilterService, 
                private genService: GenericService) {
        this.genService.placeholderObs.subscribe((val: boolean) => {
            this.isHomePage = !val;
        });   
    }

    ngOnInit() {
        this.filterListObservable = this.service.getFilterList();
    }

    onCheckBoxChange(args, option?: FilterOptions){
        (option) ? (option.checked = args.target.checked) : (console.log('Veg Only'));
        console.log(args);
    }
}