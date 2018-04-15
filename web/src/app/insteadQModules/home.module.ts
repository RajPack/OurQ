import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "../home/home.component";
import { KioskListComponent } from "../home/kiosk/kiosklist.component";
import { KioskComponent } from "../home/kiosk/kiosk.component";
import { SearchListComponent } from "../home/searchlist/searchlist.component";
import { HomeRouterAppModule } from "./home-router.module";
import { PageNotFoundComponent } from "../home/pagenotfound/pagenotfound.component";
import { KioskService } from "../services/kiosks.service";
import { KioskItemsService } from "../services/kiosksItems.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        HomeRouterAppModule
    ],
    declarations: [
        HomeComponent,
        KioskListComponent,
        KioskComponent,
        SearchListComponent,
        PageNotFoundComponent
    ],
    providers: [KioskService, KioskItemsService],
    exports: [
        HomeComponent,
        KioskListComponent,
        KioskComponent,
        SearchListComponent,
        PageNotFoundComponent
    ]
})

export class HomeAppModule { }