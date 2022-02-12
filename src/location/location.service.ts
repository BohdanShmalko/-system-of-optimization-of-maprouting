import { Injectable } from '@nestjs/common';

/**
* Location service class
* @name LocationService
* @kind class
*/
@Injectable()
export class LocationService {

  /**
  * Save user location in database
  * @name fixUserLocation
  * @kind function
  * @property {Object}  data  - data
  * @returns {string} ok status
  */
  fixUserLocation(): string {
    return 'Hello World!';
  }
}
