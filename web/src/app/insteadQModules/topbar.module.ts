import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TopBarComponent } from "../topbar/topbar.component";
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { GeoLocationService } from "../services/geolocation.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng4GeoautocompleteModule.forRoot()
    ],
    declarations: [
        TopBarComponent
    ],
    providers: [GeoLocationService],
    exports: [
        TopBarComponent,
    ]
})

export class TopBarAppModule { }