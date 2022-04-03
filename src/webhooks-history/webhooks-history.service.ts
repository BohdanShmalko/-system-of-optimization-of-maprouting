import { GetWebhooksHistoryDto, ResendWebhookDto } from '@common';
import { WebHooksHistory } from '@db';
import { Injectable } from '@nestjs/common';

/**
* WebhookHistory service class
* @name WebhookHistoryService
* @kind class
*/
@Injectable()
export class WebhookHistoryService {
    constructor() {}

    /**
    * Get Webhooks history
    * @name getWebhooksHistory
    * @kind function
    * @property {Object}  query  - query object dto
    * @property {Object}  req  - req object
    * @returns {Object} Webhooks history documents
    */
    getWebhooksHistory(req, query: GetWebhooksHistoryDto): Promise<WebHooksHistory[]> {
        return;
    }

    /**
    * Resend webhook
    * @name getWebhooksHistory
    * @kind function
    * @property {Object}  query  - query object dto
    * @property {Object}  req  - req object
    * @returns {Object} Webhooks history document
    */
    resendWebhook(req, dto: ResendWebhookDto): Promise<WebHooksHistory> {
          return;
    }

    /**
    * Function that send webhooks if user changed/created
    * @name usersWatcher
    * @kind function
    */
    usersWatcher() {

    }

    /**
    * Function that send webhooks if webhook changed/created
    * @name webhookWatcher
    * @kind function
    */
    webhookWatcher() {

    }

    /**
    * Function that send webhooks if user history changed/created
    * @name usersHistoryWatcher
    * @kind function
    */
    usersHistoryWatcher() {

    }

    /**
    * Function that send webhooks if created rout for user
    * @name locationWatcher
    * @kind function
    */
    locationWatcher() {
        //only for rout requers
    }


    /**
    * Function that send webhooks if error created
    * @name errorsWatcher
    * @kind function
    */
    errorsWatcher() {

    }
}
