import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [ DetailsComponent ],
    imports: [
        DetailsRoutingModule,
        SharedModule
    ]
})
export class DetailsModule {
}
