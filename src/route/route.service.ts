import { Injectable } from '@nestjs/common';

/**
* Route service class
* @name RouteService
* @kind class
*/
@Injectable()
export class RouteService {
    constructor() {
    }

    /**
    * Change user diskret algorithm for finding rout on map 
    * @name changeUserAlgorithm
    * @kind function
    * @property {Object}  data  - data
    * @returns {string} ok status
    */
    changeUserAlgorithm(): string {
        return 'Hello World!';
    }

    /**
    * Create route for static place
    * @name routeToPlace
    * @kind function
    * @property {Object}  data  - data
    * @returns {string} ok status
    */
    routeToPlace(): string {
        return 'Hello World!';
    }
}
