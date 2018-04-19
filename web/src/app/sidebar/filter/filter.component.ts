import { Component, OnInit } from "@angular/core";
import { FilterService } from "../../services/filter.service";
import { Observable } from "rxjs/Observable";
import { Filter, FilterOptions } from "../../models/filterModel";
import { Router, Event, NavigationEnd } from "@angular/router";

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
    filterListObservable: Observable<Filter[]>
    isHomePage: boolean;

    constructor(private service: FilterService, private router: Router) {
          this.router.events.filter((event: Event) => {
              return (event instanceof NavigationEnd) ? true : false;
          }).subscribe((event: NavigationEnd) => {
            this.isHomePage = (event.url.indexOf("/kiosk/") === 0) ? false : true;
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