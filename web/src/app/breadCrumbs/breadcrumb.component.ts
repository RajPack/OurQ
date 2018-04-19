import { Component, OnInit } from "@angular/core";
import { Params, ParamMap, ActivatedRoute, Router, Event, NavigationEnd, ActivatedRouteSnapshot } from "@angular/router";

interface breadCrumb {
    label: string;
    params: ParamMap;
    url: string;
}

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})

export class BreadCrumbComponent implements OnInit {
    public breadcrumbs: breadCrumb[];

    constructor(private route: ActivatedRoute, private router: Router) {
        this.breadcrumbs = [];
        console.log(this.router.routerState);
    }

    ngOnInit() {
        
    }

    private getBreadCrumbs(route: ActivatedRoute, 
                           url: string="", 
                           breadcrumbs: breadCrumb[] = []): breadCrumb[]  {
     
        return breadcrumbs;
    }
}