import { Controller, Post, UseGuards, HttpCode, Req } from '@nestjs/common';
import { ErrorService } from './error.service';
import { ApiKeyAuthGuard, Keys } from '@common/index';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

/**
* Error controller
* @name ErrorController
* @kind class
*/
@ApiTags('Device errors API')
@Controller('error')
export class ErrorController {
  constructor(private readonly service: ErrorService) {}

    /**
    * Save user location in database
    * @name fixError
    * @kind event
    * @property {Object}  data  - data
    * @returns {string} ok status
    */
  @ApiOperation({ summary: 'Fix device error in database' })
  @ApiResponse({ status: 200, type: () => String })
  @HttpCode(200)
  @Keys()
  @UseGuards(ApiKeyAuthGuard)
  @Post()
  fixError(@Req() req): string {
    return this.service.fixError(req);
  }
}
