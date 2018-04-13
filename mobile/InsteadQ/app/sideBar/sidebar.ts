import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Router } from "@angular/router";

//Sidebar functionalities

export class QlessSideBar {
    constructor(public drawer: RadSideDrawer) {
    }

    toggle(){
        this.drawer.toggleDrawerState();
    }
    close() {
        this.drawer.closeDrawer();
    }
    onOpening(callback){
        this.drawer.addEventListener(RadSideDrawer.drawerOpeningEvent, callback);
    }
    onClosing(callback) {
        this.drawer.addEventListener(RadSideDrawer.drawerClosedEvent, callback);
    }
    navigate(router: Router, path){
        this.close();
        router.navigate(path);
    }
}