import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'profile',
        loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule)
    },
    {
        path: 'error',
        loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
    },
    {
        path: '',
        loadChildren: () => import('./features/farms/farms.module').then(m => m.FarmsModule)
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { enableTracing: environment.enableTracing }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
