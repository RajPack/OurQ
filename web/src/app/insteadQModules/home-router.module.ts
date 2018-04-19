import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { KioskListComponent } from '../home/kiosk/kiosklist.component';
import { KioskListResolver } from '../services/kiosklist-resolve.service';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../home/pagenotfound/pagenotfound.component';
import { SearchListComponent } from '../home/searchlist/searchlist.component';
import { SearchListResolver } from '../services/search-resolve.service';
import { KioskComponent } from '../home/kiosk/kiosk.component';
import { KioskItemResolver } from '../services/kioskitem-resolve.service';

const homeRoutes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', 
        component: HomeComponent,
        resolve: { kiosks: KioskListResolver }
    },
    {
        path: 'kiosk/:id',
        component: KioskComponent,
        resolve: { kiosk: KioskItemResolver }
    },
    {
        path: 'searchresult',
        component: SearchListComponent,
        resolve: { searchlist: SearchListResolver }
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
        KioskItemResolver,
        KioskListResolver,
        SearchListResolver
    ]
})

export class HomeRouterAppModule { }