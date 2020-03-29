import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CenteredMessageComponent } from './components/centered-message/centered-message.component';

@NgModule({
    imports: [
        CommonModule

        // Own modules
    ],
    declarations: [
        // Own components
        CardComponent,
        CardContainerComponent,
        CenteredMessageComponent,
        SpinnerComponent

        // Own directives

        // Own pipes
    ],
    exports: [
        CommonModule,

        // Own modules

        // Own components
        CardComponent,
        CardContainerComponent,
        CenteredMessageComponent,
        SpinnerComponent

        // Own directives

        // Own pipes
    ]
})
export class SharedModule {
}
