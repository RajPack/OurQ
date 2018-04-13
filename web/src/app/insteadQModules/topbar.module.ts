import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TopBarLoginComponent } from "../topbarLogin/topbarlogin.component";
import { TopBarSearchComponent } from "../topbarSearch/topbarsearch.component";
import { TopBarComponent } from "../topbar/topbar.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        TopBarComponent,
        TopBarLoginComponent,
        TopBarSearchComponent
    ],
    providers: [],
    exports: [
        TopBarComponent,
        TopBarLoginComponent,
        TopBarSearchComponent
    ]
})

export class TopBarAppModule { }