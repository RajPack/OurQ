import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TopBarAppModule } from './insteadQModules/topbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SideBarAppModule } from './insteadQModules/sidebar.module';
import { HomeAppModule } from './insteadQModules/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule.forRoot(),
    HomeAppModule,
    TopBarAppModule,
    SideBarAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
