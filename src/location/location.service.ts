import { UserHistorys } from '@db';
import { Injectable } from '@nestjs/common';
import { 
  CreateUserHistoryDto, 
  GetLocationDto, 
  GetUserHistorysDto, 
  LocationStepsDto,
} from '@common';

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
  * @property {Object}  req  - req object
  * @property {Object}  dto  - user history create dto
  * @returns {Object} UserHistory document
  */
  fixUserLocation(req, dto: CreateUserHistoryDto): Promise<UserHistorys> {
    return;
  }

  /**
  * Get user location history
  * @name getUserLocation
  * @kind function
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} UserHistory documents
  */
  getUserLocation(req, query: GetUserHistorysDto): Promise<UserHistorys[]> {
    return;
  }

  /**
  * Get rout between locations
  * @name getRoute
  * @kind function
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} UserHistory documents
  */
  getRoute(req, query: GetLocationDto): Promise<LocationStepsDto[]> {
    return;
  }
}
