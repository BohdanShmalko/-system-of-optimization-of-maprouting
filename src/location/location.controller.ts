import { Controller, Post, UseGuards, HttpCode, Get, Req, Query, Body } from '@nestjs/common';
import { LocationService } from './location.service';
import { 
  ApiKeyAuthGuard, 
  Keys,
  CreateUserHistoryDto, 
  GetLocationDto, 
  GetUserHistorysDto, 
  LocationStepsDto,
} from '@common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserHistorys } from '@db';

/**
* Location controller
* @name LocationController
* @kind class
*/
@ApiTags('User location API')
@Keys()
@UseGuards(ApiKeyAuthGuard)
@Controller('location')
export class LocationController {
  constructor(private readonly service: LocationService) {}

  /**
  * Save user location in database
  * @name fixUserLocation
  * @kind event
  * @property {Object}  req  - req object
  * @property {Object}  dto  - user history create dto
  * @returns {Object} UserHistory document
  */
  @ApiOperation({ summary: 'Save user current location' })
  @ApiResponse({ status: 201, type: () => UserHistorys })
  @HttpCode(201)
  @Post()
  fixUserLocation(
    @Req() req, 
    @Body() dto: CreateUserHistoryDto,
  ): Promise<UserHistorys> {
    return this.service.fixUserLocation(req, dto);
  }

  /**
  * Get user location history
  * @name getUserLocation
  * @kind event
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} UserHistory documents
  */
   @ApiOperation({ summary: 'Get users locations' })
   @ApiResponse({ status: 200, type: () => UserHistorys, isArray: true })
   @HttpCode(200)
   @Get()
   getUserLocation(
      @Req() req, 
      @Query() query: GetUserHistorysDto,
   ): Promise<UserHistorys[]> {
     return this.service.getUserLocation(req, query);
   }

  /**
  * Get rout between locations
  * @name getRoute
  * @kind event
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} UserHistory documents
  */
   @ApiOperation({ summary: 'Get rout between locations' })
   @ApiResponse({ status: 200, type: () => LocationStepsDto, isArray: true })
   @HttpCode(200)
   @Get()
   getRoute(
      @Req() req, 
      @Query() query: GetLocationDto,
   ): Promise<LocationStepsDto[]> {
     return this.service.getRoute(req, query);
   }
}
