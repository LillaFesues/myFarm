import { DetailsComponent } from './details.component';
import { DetailsResolver } from './details.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: DetailsComponent,
        resolve: {
            data: DetailsResolver
        }
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class DetailsRoutingModule {
}
