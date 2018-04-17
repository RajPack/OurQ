import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css']
})

export class TopBarComponent implements OnInit {
    @Input() showMinimalSearch: boolean;
    constructor() {

    }

    ngOnInit() {
        
    }
}