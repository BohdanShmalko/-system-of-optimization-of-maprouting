import { Controller, Post, UseGuards, HttpCode, Req, Get, Query, Delete, Param } from '@nestjs/common';
import { ErrorService } from './error.service';
import { ApiKeyAuthGuard, ErrorIdDto, GetErrorsDto, Keys } from '@common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Errors } from '@db';

/**
* Error controller
* @name ErrorController
* @kind class
*/
@ApiTags('Device errors API')
@UseGuards(ApiKeyAuthGuard)
@Controller('errors')
export class ErrorController {
  constructor(private readonly service: ErrorService) {}

  /**
  * Get errors
  * @name getErrors
  * @kind event
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} errors documents
  */
  @ApiOperation({ summary: 'Get errors' })
  @ApiResponse({ status: 200, type: () => Errors, isArray: true })
  @HttpCode(200)
  @Keys()
  @Get()
  getErrors(
      @Req() req, 
      @Query() query: GetErrorsDto
  ): Promise<Errors[]> {
        return this.service.getErrors(req, query);
  }

   /**
   * Delete error
   * @name deleteError
   * @kind event
   * @property {Object}  req  - req object
   * @property {Object}  param  - error id dto
   * @returns {string} delete status
   */
    @ApiOperation({ summary: 'Delete client' })
    @ApiResponse({ status: 204, type: () => String })
    @HttpCode(204)
    @Keys()
    @Delete(':errorId')
    deleteError(
        @Req() req, 
        @Param() param: ErrorIdDto
    ): Promise<string> {
        return this.service.deleteError(req, param);
    }
}
