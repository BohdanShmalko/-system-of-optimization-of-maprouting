import { 
  Controller, 
  Post, 
  HttpCode, 
  UseGuards, 
  Get, 
  Req, 
  Query, 
  Body, 
  Put,
  Param,
  Delete
} from '@nestjs/common';
import { WebhookService } from './webhooks.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { 
  ApiKeyAuthGuard, 
  Keys,
  CreateWebhookDto,
  GetWebhooksDto,
  WebhookIdDto,
  UpdateWebhookDto,
} from '@common';
import { WebHooks } from '@db';

/**
* Webhook controller
* @name WebhookController
* @kind class
*/
@ApiTags('Webhook API')
@UseGuards(ApiKeyAuthGuard)
@Controller('webhooks')
export class WebhookController {
  constructor(private readonly service: WebhookService) {}

  /**
  * Get Webhooks
  * @name getWebhooks
  * @kind event
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} Webhooks documents
  */
  @ApiOperation({ summary: 'Get Webhooks' })
  @ApiResponse({ status: 200, type: () => WebHooks, isArray: true })
  @HttpCode(200)
  @Keys()
  @Get()
  getWebhooks(
       @Req() req, 
       @Query() query: GetWebhooksDto
   ): Promise<WebHooks[]> {
       return this.service.getWebhooks(req, query);
   }
 
   /**
   * Create new Webhook
   * @name createNewWebhook
   * @kind event
   * @property {Object}  dto  - create Webhook dto
   * @property {Object}  req  - req object
   * @returns {Object} new Webhook document
   */
   @ApiOperation({ summary: 'Create new Webhook' })
   @ApiResponse({ status: 201, type: () => WebHooks })
   @HttpCode(201)
   @Keys()
   @Post()
   createNewWebhook(
       @Req() req, 
       @Body() dto: CreateWebhookDto
   ): Promise<WebHooks> {
       return this.service.createNewWebhook(req, dto);
   }
 
   /**
   * Update Webhook
   * @name updateWebhook
   * @kind event
   * @property {Object}  dto  - update Webhook dto
   * @property {Object}  param  - Webhook id dto
   * @property {Object}  req  - req object
   * @returns {Object} new Webhook document
   */
   @ApiOperation({ summary: 'Update Webhook' })
   @ApiResponse({ status: 204, type: () => WebHooks })
   @HttpCode(204)
   @Keys()
   @Put(':webhookId')
   updateWebhook(
       @Req() req, 
       @Param() param: WebhookIdDto,
       @Body() dto: UpdateWebhookDto,
   ): Promise<WebHooks> {
       return this.service.updateWebhook(req, param, dto);
   }
 
   /**
   * Delete Webhook
   * @name deleteWebhook
   * @kind event
   * @property {Object}  req  - req object
   * @property {Object}  param  - Webhook id dto
   * @returns {string} delete status
   */
   @ApiOperation({ summary: 'Delete Webhook' })
   @ApiResponse({ status: 204, type: () => String })
   @HttpCode(204)
   @Keys()
   @Delete(':webhookId')
   deleteWebhook(
       @Req() req, 
       @Param() param: WebhookIdDto
   ): Promise<string> {
       return this.service.deleteWebhook(req, param);
   }
}
