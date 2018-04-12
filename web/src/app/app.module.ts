import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopBarComponent } from './topbar/topbar.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { homeComponent } from './home/home.component';
import { TopBarAppModule } from './insteadQModules/topbar.module';


@NgModule({
  imports: [
    BrowserModule,
    TopBarAppModule
  ],
  declarations: [
    AppComponent
    // TopBarComponent
    // SideBarComponent,
    // homeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
