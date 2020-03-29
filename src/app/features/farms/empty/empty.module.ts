import { EmptyComponent } from './empty.component';
import { EmptyRoutingModule } from './empty-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [ EmptyComponent ],
    imports: [
        EmptyRoutingModule,
        SharedModule
    ]
})
export class EmptyModule {
}
