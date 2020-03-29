import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {

    public data;
    public farmAndSeason;

    constructor(private route: ActivatedRoute) {
    }

    public ngOnInit(): void {

        this.route.data.subscribe(data => this.data = data.data);
        this.route.parent.data.subscribe(data => this.farmAndSeason = data.farmsAndSeasons);
    }
}
