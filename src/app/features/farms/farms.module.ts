import { FarmsComponent } from './farms.component';
import { FarmsRoutingModule } from './farms-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [FarmsComponent],
    imports: [
        FarmsRoutingModule,
        SharedModule
    ]
})
export class FarmsModule {
}
