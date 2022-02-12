import { Controller, Post, UseGuards, HttpCode } from '@nestjs/common';
import { LocationService } from './location.service';
import { JwtAuthGuard, CommentDto, Keys } from '@common/index';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

/**
* Location controller
* @name LocationController
* @kind class
*/
@ApiTags('User location API')
@Keys()
@UseGuards(JwtAuthGuard)
@Controller('location')
export class LocationController {
  constructor(private readonly service: LocationService) {}

  /**
  * Save user location in database
  * @name fixUserLocation
  * @kind event
  * @property {Object}  data  - data
  * @returns {string} ok status
  */
  @ApiOperation({ summary: 'Fix user location in database' })
  @ApiResponse({ status: 200, type: () => CommentDto })
  @HttpCode(200)
  @Post()
  fixUserLocation(): string {
    return this.service.fixUserLocation();
  }
}
