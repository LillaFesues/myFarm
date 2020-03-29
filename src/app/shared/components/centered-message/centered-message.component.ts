import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-centered-message',
    templateUrl: './centered-message.component.html',
    styleUrls: ['./centered-message.component.scss']
})
export class CenteredMessageComponent {

    @Input() public icon: string;
    @Input() public text: string;
}
