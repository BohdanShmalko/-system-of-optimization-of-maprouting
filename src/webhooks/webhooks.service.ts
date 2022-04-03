import { ClientIdDto, CreateWebhookDto, GetWebhooksDto, UpdateWebhookDto, WebhookIdDto } from '@common';
import { WebHooks } from '@db';
import { Injectable } from '@nestjs/common';

/**
* Webhook service class
* @name WebhookService
* @kind class
*/
@Injectable()
export class WebhookService {
  constructor() {
  }

  /**
  * Get Webhooks
  * @name getWebhooks
  * @kind function
  * @property {Object}  query  - query object dto
  * @property {Object}  req  - req object
  * @returns {Object} Webhooks documents
  */
  getWebhooks(req, query: GetWebhooksDto): Promise<WebHooks[]> {
      return;
  }

  /**
  * Create new Webhooks
  * @name createNewWebhook
  * @kind function
  * @property {Object}  dto  - create Webhook dto
  * @property {Object}  req  - req object
  * @returns {Object} new Webhook document
  */
  createNewWebhook(req, dto: CreateWebhookDto): Promise<WebHooks> {
    return;
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
  updateWebhook(req, param: WebhookIdDto, dto: UpdateWebhookDto): Promise<WebHooks> {
    return;
  }

  /**
  * Delete Webhook
  * @name deleteWebhook
  * @kind function
  * @property {Object}  req  - req object
  * @property {Object}  param  - Webhook id dto
  * @returns {string} delete status
  */
   deleteWebhook(req, param: ClientIdDto): Promise<string> {
    return;
  }
}
