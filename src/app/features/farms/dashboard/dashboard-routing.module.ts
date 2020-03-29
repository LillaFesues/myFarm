import { DashboardComponent } from './dashboard.component';
import { DashboardResolver } from './dashboard.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        resolve: {
            data: DashboardResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
