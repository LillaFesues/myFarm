import { ErrorComponent } from './error.component';
import { ErrorRoutingModule } from './error-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ ErrorComponent ],
    imports: [
        ErrorRoutingModule,
        SharedModule
    ]
})
export class ErrorModule {
}
