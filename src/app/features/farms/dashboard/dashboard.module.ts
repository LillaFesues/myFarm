import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [ DashboardComponent ],
    imports: [
        DashboardRoutingModule,
        SharedModule
    ]
})
export class DashboardModule {
}
