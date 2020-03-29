import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DashboardDataService } from './dashboard-data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DashboardResolver implements Resolve<any> {

    constructor(private homeDataService: DashboardDataService) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {

        const farmId = +route.paramMap.get('farmId');
        const seasonId = +route.paramMap.get('seasonId');

        return this.homeDataService.getDashboardData(farmId, seasonId).pipe(take(1));
    }
}
