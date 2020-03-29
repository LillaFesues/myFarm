import { FarmsAndSeasonsGuard } from './farms-and-seasons.guard';
import { FarmsAndSeasonsResolver } from './farms-and-seasons.resolver';
import { FarmsComponent } from './farms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'empty',
        loadChildren: () => import('./empty/empty.module').then(m => m.EmptyModule),
    },
    {
        path: ':farmId/:seasonId/:animalType/details',
        component: FarmsComponent,
        loadChildren: () => import('./details/details.module').then(m => m.DetailsModule),
        resolve: {
            farmsAndSeasons: FarmsAndSeasonsResolver
        }
    },
    {
        path: ':farmId/:seasonId/dashboard',
        component: FarmsComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        resolve: {
            farmsAndSeasons: FarmsAndSeasonsResolver
        }
    },
    {
        path: ':farmId/:seasonId',
        canActivate: [ FarmsAndSeasonsGuard ],
        component: FarmsComponent
    },
    {
        path: ':farmId',
        canActivate: [ FarmsAndSeasonsGuard ],
        children: []
    },
    {
        path: '',
        canActivate: [ FarmsAndSeasonsGuard ],
        children: []
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class FarmsRoutingModule {
}
