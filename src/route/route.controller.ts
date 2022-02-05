import { Controller, Get, Put, UseGuards, HttpCode } from '@nestjs/common';
import { RouteService } from './route.service';
import { Keys, JwtAuthGuard } from '@common/index';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

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
    @ApiOperation({ summary: 'Get route to static place' })
    @ApiResponse({ status: 200, type: () => String })
    @HttpCode(200)
    @Get('place')
    routeToPlace(){
        return this.service.routeToPlace();
    }

    @ApiOperation({ summary: 'Change account algorithm' })
    @ApiResponse({ status: 200, type: () => String })
    @HttpCode(200)
    @Put()
    changeUserAlgorithm(): string {
        return this.service.changeUserAlgorithm();
    }
}
