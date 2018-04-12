import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TopBarLoginComponent } from "../topbarLogin/topbarlogin.component";
import { TopBarSearchComponent } from "../topbarSearch/topbarsearch.component";
import { TopBarComponent } from "../topbar/topbar.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        TopBarComponent,
        TopBarLoginComponent,
        TopBarSearchComponent
    ],
    providers: []
})

export class TopBarAppModule { }