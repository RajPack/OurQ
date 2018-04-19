import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TopBarComponent } from "../topbar/topbar.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        TopBarComponent
    ],
    providers: [],
    exports: [
        TopBarComponent,
    ]
})

export class TopBarAppModule { }