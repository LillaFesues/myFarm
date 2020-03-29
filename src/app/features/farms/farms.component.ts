import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-farms',
    templateUrl: './farms.component.html',
    styleUrls: [ './farms.component.scss' ]
})
export class FarmsComponent implements OnInit {

    public farmsAndSeasons;

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    public ngOnInit(): void {

        this.route.data.subscribe(data => this.farmsAndSeasons = data.farmsAndSeasons);
    }
}
