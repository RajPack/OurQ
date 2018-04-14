import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { KioskListComponent } from '../home/kiosk/kiosklist.component';
import { KioskListResolver } from '../services/kiosklist-resolve.service';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../home/pagenotfound/pagenotfound.component';

const homeRoutes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', 
        component: KioskListComponent,
        resolve: { kiosks: KioskListResolver }
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(homeRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        KioskListResolver
    ]
})

export class HomeRouterAppModule { }