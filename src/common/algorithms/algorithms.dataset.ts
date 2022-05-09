import { EAlgorithms } from "@db";

/**
* Location Service Name Enum
* @name ELocationServiceName
* @kind namespace
*/
export enum ELocationServiceName {
    LocationService = 'locationService',
    AlgorithmService = 'algorithmService',
}

/**
* Algorithms settings dataset
* @name algorithmSettingsDataset
* @kind namespace
*/
export const algorithmSettingsDataset = {
    [EAlgorithms.FloydWarshall] : {
        service: ELocationServiceName.AlgorithmService,
        funcName: 'floydWarshallAlgorithm',
    },
    [EAlgorithms.BellmanFord] : {
        service: ELocationServiceName.AlgorithmService,
        funcName: 'bellmanFordAlgorithm',
    },
    [EAlgorithms.Openroute] : {
        service: ELocationServiceName.LocationService,
        funcName: 'openrouteStrategy',
    },
    [EAlgorithms.Bing] : {
        service: ELocationServiceName.LocationService,
        funcName: 'bingStrategy',
    },
}