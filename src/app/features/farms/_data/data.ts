import { AnimalTypes } from '../shared/models/animal-types.enum';

export const data = [
    {
        'id': 1,
        'name': 'Good Day Acres',
        'seasons': [
            {
                'id': 11,
                'name': '2019 - winter',
                'animalTypes': [
                    {
                        'type': AnimalTypes.cattle,
                        'amount': 5,
                        'animals': [
                            {
                                'id': 111,
                                'name': 'Cattle #1'
                            },
                            {
                                'id': 112,
                                'name': 'Cattle #2'
                            },
                            {
                                'id': 113,
                                'name': 'Cattle #3'
                            },
                            {
                                'id': 114,
                                'name': 'Cattle #4'
                            },
                            {
                                'id': 115,
                                'name': 'Cattle #5'
                            }
                        ]
                    },
                    {
                        'type': AnimalTypes.goat,
                        'amount': 3,
                        'animals': [
                            {
                                'id': 116,
                                'name': 'Goat #1'
                            },
                            {
                                'id': 117,
                                'name': 'Goat #2'
                            },
                            {
                                'id': 118,
                                'name': 'Goat #3'
                            }
                        ]
                    },
                    {
                        'type': AnimalTypes.chicken,
                        'amount': 4,
                        'animals': [
                            {
                                'id': 119,
                                'name': 'Chicken #1'
                            },
                            {
                                'id': 1110,
                                'name': 'Chicken #2'
                            },
                            {
                                'id': 1111,
                                'name': 'Chicken #3'
                            },
                            {
                                'id': 1112,
                                'name': 'Chicken #4'
                            }
                        ]
                    }
                ]
            },
            {
                'id': 12,
                'name': '2019 - spring',
                'animalTypes': [
                    {
                        'type': AnimalTypes.cattle,
                        'amount': 5,
                        'animals': [
                            {
                                'id': 111,
                                'name': 'Cattle #1'
                            },
                            {
                                'id': 112,
                                'name': 'Cattle #2'
                            },
                            {
                                'id': 113,
                                'name': 'Cattle #3'
                            },
                            {
                                'id': 114,
                                'name': 'Cattle #4'
                            },
                            {
                                'id': 115,
                                'name': 'Cattle #5'
                            }
                        ]
                    },
                    {
                        'type': AnimalTypes.goat,
                        'amount': 1,
                        'animals': [
                            {
                                'id': 116,
                                'name': 'Goat #1'
                            }
                        ]
                    },
                    {
                        'type': AnimalTypes.chicken,
                        'amount': 5,
                        'animals': [
                            {
                                'id': 119,
                                'name': 'Chicken #1'
                            },
                            {
                                'id': 1110,
                                'name': 'Chicken #2'
                            },
                            {
                                'id': 1111,
                                'name': 'Chicken #3'
                            },
                            {
                                'id': 1112,
                                'name': 'Chicken #4'
                            },
                            {
                                'id': 1113,
                                'name': 'Chicken #5'
                            }
                        ]
                    }
                ]
            },
            {
                'id': 13,
                'name': '2019 - summer',
                'animalTypes': [
                    {
                        'type': AnimalTypes.cattle,
                        'amount': 8,
                        'animals': [
                            {
                                'id': 111,
                                'name': 'Cattle #1'
                            },
                            {
                                'id': 112,
                                'name': 'Cattle #2'
                            },
                            {
                                'id': 113,
                                'name': 'Cattle #3'
                            },
                            {
                                'id': 114,
                                'name': 'Cattle #4'
                            },
                            {
                                'id': 115,
                                'name': 'Cattle #5'
                            },
                            {
                                'id': 1114,
                                'name': 'Cattle #6'
                            },
                            {
                                'id': 1115,
                                'name': 'Cattle #7'
                            },
                            {
                                'id': 1116,
                                'name': 'Cattle #8'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        'id': 2,
        'name': 'Rooster Estate',
        'seasons': [
            {
                'id': 21,
                'name': '2019 - autumn',
                'animalTypes': [
                    {
                        'type': AnimalTypes.chicken,
                        'amount': 6,
                        'animals': [
                            {
                                'id': 211,
                                'name': 'Chicken #1'
                            },
                            {
                                'id': 212,
                                'name': 'Chicken #2'
                            },
                            {
                                'id': 213,
                                'name': 'Chicken #3'
                            },
                            {
                                'id': 214,
                                'name': 'Chicken #4'
                            },
                            {
                                'id': 215,
                                'name': 'Chicken #5'
                            },
                            {
                                'id': 216,
                                'name': 'Chicken #6'
                            }
                        ]
                    }
                ]
            },
            {
                'id': 22,
                'name': '2020 - winter',
                'animalTypes': [
                    {
                        'type': AnimalTypes.chicken,
                        'amount': 6,
                        'animals': [
                            {
                                'id': 211,
                                'name': 'Chicken #1'
                            },
                            {
                                'id': 212,
                                'name': 'Chicken #2'
                            },
                            {
                                'id': 213,
                                'name': 'Chicken #3'
                            },
                            {
                                'id': 214,
                                'name': 'Chicken #4'
                            },
                            {
                                'id': 215,
                                'name': 'Chicken #5'
                            },
                            {
                                'id': 216,
                                'name': 'Chicken #6'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export function getFarmById(farmId: number): any {

    return data.find(farm => farm.id === farmId);
}

export function getSeasonById(farmId: number, seasonId: number): any {

    return getFarmById(farmId).seasons.find(season => season.id === seasonId);
}

export function getAnimalTypes(farmId: number, seasonId: number): any {

    return getSeasonById(farmId, seasonId).animalTypes;
}
export function getAnimals(farmId: number, seasonId: number, animalType: string): any {

    return getSeasonById(farmId, seasonId).animalTypes
        .find(_animalType => _animalType.type === animalType).animals;
}
