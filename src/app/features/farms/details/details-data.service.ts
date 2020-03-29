import { AnimalTypes } from '../shared/models/animal-types.enum';
import { delay } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { getAnimals } from '../_data/data';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DetailsDataService {

    constructor() {
    }

    public getDetailsData(farmId: number, seasonId: number, animalType: AnimalTypes): Observable<any> {

        console.log(`[API] api/farms/${farmId}/seasons/${seasonId}/animals/${animalType}`);

        return of(getAnimals(farmId, seasonId, animalType)).pipe(delay(environment.delay));
    }
}
