import { EAlgorithms, LocationsService, LocationStepsService, UserHistorys, UserHistorysService, UsersService } from '@db';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { 
  AlgorithmsService,
  CoreService,
  CreateUserHistoryDto, 
  EHttpExceptionMessage, 
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
  ){}

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
    if(this.locationStrategyService.apiStrategys.includes(algorithm)) {
      return this.formByApiAlgorithms(
        algorithm,
        newLocation,
        locationDto,
      )
    }
    const allAlgorithmsSteps = [];
    for(const apiAlgorithm of this.locationStrategyService.apiStrategys){
      const result = await this.getOrCreateApiSteps(apiAlgorithm, locationDto);
      allAlgorithmsSteps.push(result);
    }
    return this.formByDiscretAlgorithms(
      algorithm,
      newLocation,
      allAlgorithmsSteps,
    );
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

  private async formByApiAlgorithms(algorithm, newLocation, locationDto, withId = true) {
    switch (algorithm) {
      case EAlgorithms.Google: return this.insertByApiAlgorithm(
        this.locationStrategyService.googleStrategy.bind(this.locationStrategyService), 
        newLocation._id.toString(), 
        locationDto,
        withId,
      )
      case EAlgorithms.Here: return this.insertByApiAlgorithm(
        this.locationStrategyService.hereStrategy.bind(this.locationStrategyService), 
        newLocation._id.toString(), 
        locationDto,
        withId,
      )
    }
    return [];
  }

  private async formByDiscretAlgorithms(algorithm, newLocation, allAlgorithmsSteps, withId = true) {
    switch (algorithm) {
      case EAlgorithms.BipartiteSubset: return this.insertByApiAlgorithm(
        this.algorithmService.bipartiteSubsets.bind(this.algorithmService), 
        newLocation._id.toString(), 
        allAlgorithmsSteps,
        withId,
      )
    }
    return [];
  }

  private async getOrCreateApiSteps(algorithm, locationDto) {
    const location = await this.locationsService.findByDto({...locationDto, algorithm});
    if(location) {
      const steps = await this.locationStepsService.findByLocationId(location._id);
      if(steps) return steps.map(step => ({
        lat: step.lat,
        lon: step.lon,
        step: step.step,
      }));
    };
    const newLocation = await this.locationsService.create({...locationDto, algorithm});
    return this.formByApiAlgorithms(
      algorithm, 
      newLocation,
      locationDto,
      false,
    )
  }
}
