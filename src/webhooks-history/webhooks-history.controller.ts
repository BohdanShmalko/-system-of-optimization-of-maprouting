import { 
  Controller, 
  Post, 
  HttpCode, 
  UseGuards, 
  Get, 
  Req, 
  Query, 
  Body,
} from '@nestjs/common';
import { WebhookHistoryService } from './webhooks-history.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { 
  ApiKeyAuthGuard, 
  Keys,
  ResendWebhookDto,
  GetWebhooksHistoryDto,
} from '@common';
import { WebHooks, WebHooksHistory } from '@db';

/**
* Webhook controller
* @name WebhookController
* @kind class
*/
@ApiTags('Webhook history API')
@UseGuards(ApiKeyAuthGuard)
@Controller('webhookshistory')
export class WebhookHistoryController {
  constructor(private readonly service: WebhookHistoryService) {
    this.service.usersWatcher();
    this.service.webhookWatcher();
    this.service.usersHistoryWatcher();
    this.service.locationWatcher();
    this.service.errorsWatcher();
  }

  /**
  * Get Webhooks history
  * @name getWebhooksHistory
  * @kind event
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} Webhooks history documents
  */
  @ApiOperation({ summary: 'Get Webhooks history' })
  @ApiResponse({ status: 200, type: () => WebHooksHistory, isArray: true })
  @HttpCode(200)
  @Keys()
  @Get()
  getWebhooksHistory(
       @Req() req, 
       @Query() query: GetWebhooksHistoryDto
   ): Promise<WebHooksHistory[]> {
       return this.service.getWebhooksHistory(req, query);
   }

  /**
  * Resend webhook
  * @name getWebhooksHistory
  * @kind event
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} Webhooks history document
  */
  @ApiOperation({ summary: 'Resend Webhook' })
  @ApiResponse({ status: 201, type: () => WebHooksHistory })
  @HttpCode(201)
  @Keys()
  @Post()
  resendWebhook(
       @Req() req, 
       @Body() dto: ResendWebhookDto
   ): Promise<WebHooksHistory> {
       return this.service.resendWebhook(req, dto);
   }

}
