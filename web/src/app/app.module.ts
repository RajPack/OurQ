import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TopBarAppModule } from './insteadQModules/topbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SideBarAppModule } from './insteadQModules/sidebar.module';
import { HomeAppModule } from './insteadQModules/home.module';
import { HomeRouterAppModule } from './insteadQModules/home-router.module';
import { GenericService } from './services/generic.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule.forRoot(),
    TopBarAppModule,
    SideBarAppModule,
    HomeAppModule,
    HomeRouterAppModule
  ],
  providers: [GenericService],
  bootstrap: [AppComponent]
})
export class AppModule { }
