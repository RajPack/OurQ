import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { Params, ParamMap, ActivatedRoute, Router, Event, NavigationEnd, ActivatedRouteSnapshot } from "@angular/router";
import { KioskService } from "../services/kiosks.service";

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

export class BreadCrumbComponent implements OnInit, AfterViewInit {
    breadcrumbs: any = [];
    breadCrumbList: any = [];
    @Input() detectedLocationList: string;

    constructor(private route: ActivatedRoute, private router: Router,
        private kioskService: KioskService) {
    }

    ngOnInit() {
        this.router.events.filter((event) => {
            return (event instanceof NavigationEnd) ? true : false;
        }).subscribe((event: NavigationEnd) => {
            this.breadcrumbs = [];
            this.breadCrumbList = [];
            this.route.firstChild.data.subscribe((value) => {
                this.breadcrumbs[0] = value.breadValue;
                this.breadCrumbList = this.breadCrumbProcessor(this.breadcrumbs);
            });
        });
    }

    ngAfterViewInit() {

    }

    breadCrumbProcessor(breadcrumbList: any) {
        console.log(breadcrumbList);
        let kioskName: string = "";
        let breadCrumbList: any = [];
        if (breadcrumbList[0].parent !== "None") {
            kioskName = this.getParentName();
            breadCrumbList[0] = { name: breadcrumbList[0].parent, 
                                  link: breadcrumbList[0].routerlink, 
                                  id: "None" }
            breadCrumbList[1] = { name: breadcrumbList[0].breadCrumb, link: "None", id: kioskName }
        }else {
            breadCrumbList[0] = { name: breadcrumbList[0].breadCrumb, link: "None", id: "None" }
        }
        return breadCrumbList;
    }

    getParentName() {
        let kioskId = this.route.snapshot.firstChild.paramMap.get('id');
        let kioskName: string;
        this.kioskService.getKiosk(kioskId).subscribe((val) => {
            kioskName = val.name;
        });
        return kioskName;
    }
}