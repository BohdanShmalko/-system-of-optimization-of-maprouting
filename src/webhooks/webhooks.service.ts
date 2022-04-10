import { ClientIdDto, CoreService, CreateWebhookDto, EHttpExceptionMessage, GetWebhooksDto, UpdateWebhookDto, WebhookIdDto } from '@common';
import { WebHooks, WebHooksHistoryService, WebHooksService } from '@db';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
const URL = require("url").URL;

/**
* Webhook service class
* @name WebhookService
* @kind class
*/
@Injectable()
export class WebhookService {
  constructor(
    private readonly webhookService: WebHooksService,
    private readonly webhookHistoryService: WebHooksHistoryService,
    private readonly core: CoreService,
  ) {
  }

  /**
  * Get Webhooks
  * @name getWebhooks
  * @kind function
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} Webhooks documents
  */
  async getWebhooks(req, query: GetWebhooksDto): Promise<WebHooks[]> {
    const searchObj = this.core.buildSearchPipeline(req.client, query);
    try {
        const result = await this.webhookService.search({...searchObj, select: { clientId: -1 }});
        return result;
    }catch(e) {
        throw new HttpException(EHttpExceptionMessage.InvalidQuery, HttpStatus.BAD_REQUEST);
    }
  }

  /**
  * Create new Webhooks
  * @name createNewWebhook
  * @kind function
  * @property {Object}  dto  - create Webhook dto
  * @property {Object}  req  - req object
  * @returns {Object} new Webhook document
  */
  async createNewWebhook(req, dto: CreateWebhookDto): Promise<WebHooks> {
    const clientId = req.client.document._id;
    const existWebhook = await this.webhookService.findByUrlEventClient({ 
      url: dto.url,
      event: dto.event,
      clientId,
    });
    if(existWebhook) throw new HttpException(
      EHttpExceptionMessage.WebHookExist, 
      HttpStatus.BAD_REQUEST
    );
    if(!this.isValidUrl(dto.url)) throw new HttpException(
      EHttpExceptionMessage.InvalidUrl, 
      HttpStatus.BAD_REQUEST
    );
    const newWebhook = await this.webhookService.create({
      ...dto,
      clientId,
    })
    return newWebhook;
  }

  /**
  * Update Webhook
  * @name updateWebhook
  * @kind function
  * @property {Object}  dto  - update Webhook dto
  * @property {Object}  param  - Webhook id dto
  * @property {Object}  req  - req object
  * @returns {Object} new Webhook document
  */
  async updateWebhook(req, param: WebhookIdDto, dto: UpdateWebhookDto): Promise<WebHooks> {
    const webhookId = param.webhookId;
    const clientId = req.client.document._id;
    const existingDocument = await this.webhookService.findByIdAndClient(webhookId, clientId);
    if(!existingDocument) throw new HttpException(
      EHttpExceptionMessage.WebHookNotExistId, 
      HttpStatus.BAD_REQUEST
    );
    if(dto.url && !this.isValidUrl(dto.url)) throw new HttpException(
      EHttpExceptionMessage.InvalidUrl, 
      HttpStatus.BAD_REQUEST
    );
    const updatedUser = await this.webhookService.updateById(webhookId, dto);
    return updatedUser;
  }

  /**
  * Delete Webhook
  * @name deleteWebhook
  * @kind function
  * @property {Object}  req  - req object
  * @property {Object}  param  - Webhook id dto
  * @returns {string} delete status
  */
  async deleteWebhook(req, param: WebhookIdDto): Promise<string> {
    const webhookId = param.webhookId;
    const clientId = req.client.document._id;
    const existingDocument = await this.webhookService.findByIdAndClient(webhookId, clientId);
    if(!existingDocument) throw new HttpException(
      EHttpExceptionMessage.WebHookNotExistId, 
      HttpStatus.BAD_REQUEST
    );
    await this.webhookHistoryService.deleteByWebhookId(webhookId);
    await this.webhookService.deleteById(webhookId);
    return 'ok';
  }

  private isValidUrl(s) {
    try {
      new URL(s);
      return true;
    } catch (err) {
      return false;
    }
  };
}
