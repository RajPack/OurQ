import { Component, OnInit, OnChanges } from "@angular/core";
import { GenericService } from "../services/generic.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnChanges {

    constructor(private service: GenericService) {
       
    }

    ngOnInit() {
        
    }

    ngOnChanges() {
        
    }
}