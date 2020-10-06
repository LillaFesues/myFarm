import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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

// NB: EnableTracing only shows minimal information when paired with Lazyloading on Angular 8. This is no longer the case in Angular 10
// When lazy loading is not present, logs look like this: https://i.imgur.com/0k9B5W2.png and should show up on a route change
// Try this out here: https://stackblitz.com/edit/angular-router-basic-example-erxakt?file=app/app.routing.module.ts

// Lazy loading works really well with preloading. It waits until there is a period of inactivity then load the rest of the modules
// Please see https://medium.com/@prowe214/lazy-loading-vs-preloading-modules-which-should-you-choose-85a1fb71a24
@NgModule({
    imports: [ RouterModule.forRoot(routes,
        {
            enableTracing: environment.enableTracing,
            preloadingStrategy: PreloadAllModules
        }
    ) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
