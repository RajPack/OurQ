import { Component, OnInit } from "@angular/core";
import { slideInDownAnimation } from "../animations/animations";

@Component({
    selector: 'app-topbar-login',
    templateUrl: './topbarlogin.component.html',
    styleUrls: ['./topbarlogin.component.css'],
    animations: [slideInDownAnimation]
})

export class TopBarLoginComponent implements OnInit {
    userLoggedIn: boolean;
    
    constructor() {

    }

    ngOnInit() {
        
    }
}