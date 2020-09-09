import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { FarmsAndSeasonsDataService } from './farms-and-seasons-data.service';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FarmsAndSeasonsGuard implements CanActivate {

    constructor(
        private farmAndSeasonService: FarmsAndSeasonsDataService,
        private router: Router
    ) {
    }

    public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {

        const farmId = route.paramMap.get('farmId') ? +route.paramMap.get('farmId') : null;
        const seasonId = route.paramMap.get('seasonId') ? +route.paramMap.get('seasonId') : null;

        return this.farmAndSeasonService.getFarmsAndSeasons(farmId, seasonId)
            .pipe(
                take(1),
                map(farmsAndSeasons => {

                    if (farmsAndSeasons == null) {
                        this.router.navigate([ environment.hasFarm ? 'error' : 'empty' ]);
                        return false;
                    }

                    this.router.navigate([
                        farmsAndSeasons.selectedFarmId,
                        farmsAndSeasons.selectedSeasonId,
                        'dashboard'
                    ]);
                    return true;
                })
            );
    }
}
