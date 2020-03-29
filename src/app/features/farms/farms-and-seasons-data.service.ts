import { data, getFarmById } from './_data/data';
import { delay, map, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FarmsAndSeasonsDataService {

    private static farmsCache;
    private static seasonsCache: { [key: string]: any } = {};

    public getFarmsAndSeasons(farmId?: number, seasonId?: number): Observable<any> {

        if (!environment.hasFarm) {
            return of(null);
        }

        return this.getFarmsData()
            .pipe(
                switchMap(farms => {

                    // If the requested farmId is not in the list, return null
                    if (farmId && !farms.find(farm => farm.id === farmId)) {

                        return null;
                    }

                    // The selectedFarmId can either be the requested one (--> is always in the list because of the previous check)
                    // or the one saved in the localStorage
                    let selectedFarmId = farmId || +localStorage.getItem('selectedFarmId');

                    // If there is neither a requested farmId nor one in the local storage
                    // or the one in the local storage does not exist in the list anymore
                    // take the first one in the list
                    if (!selectedFarmId || !farms.find(farm => farm.id === selectedFarmId)) {
                        selectedFarmId = farms[0].id;
                    }

                    // Write the selectedFarmId back to the local storage
                    localStorage.setItem('selectedFarmId', selectedFarmId + '');

                    // Get the selectedFarm object
                    const selectedFarm = farms.find(farm => farm.id === selectedFarmId);

                    // Get the seasons for the selected farm
                    return this.getSeasonsData(selectedFarmId)
                        .pipe(
                            map(seasons => {

                                // If the requested seasonId is not in the list, return null
                                if (seasonId && !seasons.find(season => season.id === seasonId)) {

                                    return null;
                                }

                                // The selectedSeasonId can either be the requested one (--> is always in the list because of the previous
                                // check) or the one saved in the localStorage
                                let selectedSeasonId = seasonId || +localStorage.getItem('selectedSeasonId');

                                // If there is neither a requested seasonId nor one in the local storage
                                // or the one in the local storage does not exist in the list anymore
                                // take the first one in the list
                                if (!selectedSeasonId || !seasons.find(season => season.id === selectedSeasonId)) {
                                    selectedSeasonId = seasons[0].id;
                                }

                                // Write the selectedSeasonId back to the local storage
                                localStorage.setItem('selectedSeasonId', selectedSeasonId + '');

                                // Get the selectedInvoicePeriod object
                                const selectedSeason = seasons.find(invoicePeriod => invoicePeriod.id === selectedSeasonId);

                                return {
                                    farms,
                                    selectedFarmId,
                                    selectedFarm,
                                    seasons,
                                    selectedSeasonId,
                                    selectedSeason
                                };
                            })
                        );
                })
            );
    }

    private getFarmsData(): Observable<any> {

        if (FarmsAndSeasonsDataService.farmsCache) {
            return of(FarmsAndSeasonsDataService.farmsCache);
        }

        FarmsAndSeasonsDataService.farmsCache = data
            .map(farm => ({
                'id': farm.id,
                'name': farm.name
            }));

        console.log('[API] api/farms');
        return of(FarmsAndSeasonsDataService.farmsCache).pipe(delay(environment.delay));
    }

    private getSeasonsData(farmId: number): Observable<any> {

        if (FarmsAndSeasonsDataService.seasonsCache[farmId]) {
            return of(FarmsAndSeasonsDataService.seasonsCache[farmId]);
        }

        FarmsAndSeasonsDataService.seasonsCache[farmId] = getFarmById(farmId).seasons
            .map(season => ({
                'id': season.id,
                'name': season.name
            }));

        console.log(`[API] api/farms/${farmId}/seasons`);
        return of(FarmsAndSeasonsDataService.seasonsCache[farmId]).pipe(delay(environment.delay));
    }
}
