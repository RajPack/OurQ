import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TopBarComponent } from "../topbar/topbar.component";
import { FilterService } from "../services/filter.service";
import { SideBarComponent } from "../sidebar/sidebar.component";
import { FilterComponent } from "../sidebar/filter/filter.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
       SideBarComponent,
       FilterComponent
    ],
    providers: [FilterService],
    exports: [
        SideBarComponent,
        FilterComponent
    ]
})

export class SideBarAppModule { }