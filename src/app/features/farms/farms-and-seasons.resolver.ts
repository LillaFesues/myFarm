import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FarmsAndSeasonsDataService } from './farms-and-seasons-data.service';
import { Injectable } from '@angular/core';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FarmsAndSeasonsResolver implements Resolve<any> {

    constructor(private router: Router, private farmsAndSeasonsService: FarmsAndSeasonsDataService) {
    }

    public resolve(route: ActivatedRouteSnapshot, _): Observable<any> {

        const farmId = route.paramMap.get('farmId') ? +route.paramMap.get('farmId') : null;
        const seasonId = route.paramMap.get('seasonId') ? +route.paramMap.get('seasonId') : null;

        return this.farmsAndSeasonsService.getFarmsAndSeasons(farmId, seasonId)
            .pipe(
                take(1),
                mergeMap(farmsAndSeasons => {

                    if (farmsAndSeasons == null) {
                        this.router.navigate([ environment.hasFarm ? 'error' : 'empty' ]);
                        return EMPTY;
                    }

                    return of(farmsAndSeasons);
                })
            );
    }
}
