import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { AnimalTypes } from '../shared/models/animal-types.enum';
import { DetailsDataService } from './details-data.service';
import { EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DetailsResolver implements Resolve<any> {

    constructor(private router: Router, private detailsDataService: DetailsDataService) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {

        const farmId = +route.paramMap.get('farmId');
        const seasonId = +route.paramMap.get('seasonId');
        const animalType = AnimalTypes[route.paramMap.get('animalType')];

        if (!animalType) {
            this.router.navigate([ 'error' ]);
            return EMPTY;
        }

        return this.detailsDataService.getDetailsData(farmId, seasonId, animalType)
            .pipe(take(1));
    }
}
