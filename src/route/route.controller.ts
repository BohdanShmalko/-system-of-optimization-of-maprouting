import { Controller, Get, Put, UseGuards, HttpCode, Query } from '@nestjs/common';
import { RouteService } from './route.service';
import { Keys, JwtAuthGuard, CoordinateDto } from '@common/index';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

/**
* Route controller
* @name RouteController
* @kind class
*/
@ApiTags('User route API')
@Keys()
@UseGuards(JwtAuthGuard)
@Controller('route')
export class RouteController {
    constructor(private readonly service: RouteService) {
    }

    // @Get('user')
    // routeToUser(){
    //     return this.service.routeToUser();
    // }
    /**
    * Create route for static place
    * @name routeToPlace
    * @kind event
    * @property {Object}  data  - data
    * @returns {string} ok status
    */
    @ApiOperation({ summary: 'Get route to static place' })
    @ApiResponse({ status: 200, type: () => String })
    @HttpCode(200)
    @Get('place')
    routeToPlace(){
        return this.service.routeToPlace();
    }

    /**
    * Change user diskret algorithm for finding rout on map 
    * @name changeUserAlgorithm
    * @kind event
    * @property {Object}  data  - data
    * @returns {string} ok status
    */
    @ApiOperation({ summary: 'Change account algorithm' })
    @ApiResponse({ status: 200, type: () => String })
    @HttpCode(200)
    @Put()
    changeUserAlgorithm(@Query() coordinates: CoordinateDto): string {
        return this.service.changeUserAlgorithm();
    }
}
