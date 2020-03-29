import { delay } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { getAnimalTypes } from '../_data/data';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardDataService {

    public getDashboardData(farmId: number, seasonId: number): Observable<any> {

        console.log(`[API] api/farms/${farmId}/seasons/${seasonId}/dashboard`);

        return of(
            getAnimalTypes(farmId, seasonId).map(animalType => ({
                'type': animalType.type,
                'amount': animalType.amount
            }))
        ).pipe(delay(environment.delay));
    }
}
