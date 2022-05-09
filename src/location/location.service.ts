import { EAlgorithms, LocationsService, LocationStepsService, UserHistorys, UserHistorysService, UsersService } from '@db';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { 
  algorithmSettingsDataset,
  AlgorithmsService,
  CoreService,
  CreateUserHistoryDto, 
  EHttpExceptionMessage, 
  ELocationServiceName, 
  GetLocationDto, 
  GetUserHistorysDto, 
  LocationStepsDto,
  LocationStrategyService,
} from '@common';

/**
* Location service class
* @name LocationService
* @kind class
*/
@Injectable()
export class LocationService {

  constructor(
    private readonly locationsService: LocationsService,
    private readonly locationStepsService: LocationStepsService,
    private readonly userHistoryService: UserHistorysService,
    private readonly usersService: UsersService,
    private readonly core: CoreService,
    private readonly algorithmService: AlgorithmsService,
    private readonly locationStrategyService: LocationStrategyService,
  ){
    this[ELocationServiceName.AlgorithmService] = this.algorithmService;
    this[ELocationServiceName.LocationService] = this.locationStepsService;
  }

  /**
  * Save user location in database
  * @name fixUserLocation
  * @kind function
  * @property {Object}  req  - req object
  * @property {Object}  dto  - user history create dto
  * @returns {Object} UserHistory document
  */
  async fixUserLocation(req, dto: CreateUserHistoryDto): Promise<UserHistorys> {
    const clientId = req.client.document._id;
    const user = await this.usersService.findByIdAndClient(dto.userId, clientId);
    if(!user) throw new HttpException(EHttpExceptionMessage.UserNotExistId, HttpStatus.FORBIDDEN);
    const userHistory = await this.userHistoryService.create({
      ...dto as any,
      clientId,
    });
    return userHistory;
  }

  /**
  * Get user location history
  * @name getUserLocation
  * @kind function
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} UserHistory documents
  */
  async getUserLocation(req, query: GetUserHistorysDto): Promise<UserHistorys[]> {
    const searchObj = this.core.buildSearchPipeline(req.client, query);
    try {
        const result = await this.userHistoryService.search({...searchObj, select: 
          { 
            lat: 1,
            lon:1,
            time: 1,
            userId: 1,
          }
        });
        return result;
    }catch(e) {
        throw new HttpException(EHttpExceptionMessage.InvalidQuery, HttpStatus.BAD_REQUEST);
    }
  }

  /**
  * Get rout between locations
  * @name getRoute
  * @kind function
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} UserHistory documents
  */
  async getRoute(req, query: GetLocationDto): Promise<LocationStepsDto[]> {
    const clientId = req.client.document._id;
    const user = await this.usersService.findByIdAndClient(query.userId, clientId);
    const apiStrategys = Object.keys(algorithmSettingsDataset);
    if(!user) throw new HttpException(EHttpExceptionMessage.UserNotExistId, HttpStatus.FORBIDDEN);
    const algorithm = user.algorithm;
    const locationDto = {
      ...query,
      algorithm,
    }
    const location = await this.locationsService.findByDto(locationDto);
    if(location){
      const steps = await this.locationStepsService.findByLocationId(location._id);
      if(steps) return steps.map(step => ({
        locationId: location._id.toString(),
        lat: step.lat,
        lon: step.lon,
        step: step.step,
      }));
    }
    const newLocation = await this.locationsService.create(locationDto);
    return this.formByApiAlgorithms(
        apiStrategys,
        algorithm,
        newLocation,
        locationDto,
    )
  }

  private async insertByApiAlgorithm(func, locationId, locationDto, withId) {
    const allSteps = await func(locationDto);
          const result = allSteps.map(obj => ({
            ...obj, 
            locationId,
          }));
    await this.locationStepsService.createMany(result);
    return withId ? result : allSteps;
  }

  private async formByApiAlgorithms(apiStrategys, algorithm, newLocation, locationDto, withId = true) {
    for(const strategy of apiStrategys) {
      if(strategy === algorithm) {
        const { service, funcName } = algorithmSettingsDataset[strategy];
        return this.insertByApiAlgorithm(
          this[service][funcName].bind(this.locationStrategyService), 
          newLocation._id.toString(), 
          locationDto,
          withId,
        )
      }
    }
    return [];
  }
}
