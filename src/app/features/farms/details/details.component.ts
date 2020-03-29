import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: [ './details.component.scss' ]
})
export class DetailsComponent implements OnInit {

    public data;

    constructor(private route: ActivatedRoute) {
    }

    public ngOnInit(): void {

        this.route.data.subscribe(data => this.data = data.data);
    }
}
