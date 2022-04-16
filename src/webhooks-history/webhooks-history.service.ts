import { CoreService, EHttpExceptionMessage, GetWebhooksHistoryDto, ResendWebhookDto } from '@common';
import { ClientsService, ErrorsService, EWebhookEvents, UserHistorysService, UserRoomsService, UsersService, WebHooksHistory, WebHooksHistoryService, WebHooksService } from '@db';
import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
const urlModule = require('url');

/**
* WebhookHistory service class
* @name WebhookHistoryService
* @kind class
*/
@Injectable()
export class WebhookHistoryService {
    constructor(
        private readonly core: CoreService,
        private readonly http: HttpService,
        private readonly webhookHistoryService: WebHooksHistoryService,
        private readonly webhookService: WebHooksService,
        private readonly clientsService: ClientsService,
        private readonly usersService: UsersService,
        private readonly userRoomsService: UserRoomsService,
        private readonly userHistorysService: UserHistorysService,
        private readonly errorsService: ErrorsService,
    ) {}

    /**
    * Get Webhooks history
    * @name getWebhooksHistory
    * @kind function
    * @property {Object}  query  - query object dto
    * @property {Object}  req  - req object
    * @returns {Object} Webhooks history documents
    */
    async getWebhooksHistory(req, query: GetWebhooksHistoryDto): Promise<WebHooksHistory[]> {
        const searchObj = this.core.buildSearchPipeline(req.client, query);
        try {
            const result = await this.webhookHistoryService.search({...searchObj, select: 
                { 
                    webhookId: 1,
                    data: 1,
                    success: 1,
                    userId: 1,
                }
            });
            return result;
        }catch(e) {
            throw new HttpException(EHttpExceptionMessage.InvalidQuery, HttpStatus.BAD_REQUEST);
        }
    }

    /**
    * Resend webhook
    * @name resendWebhook
    * @kind function
    * @property {Object}  query  - query object dto
    * @property {Object}  req  - req object
    * @returns {Object} Webhooks history document
    */
    async resendWebhook(req, dto: ResendWebhookDto): Promise<WebHooksHistory> {
        const clientId = req.client.document._id;
        const existWebhookHistory = await this.webhookHistoryService.findByIdAndClient(
            dto.webhookHistoryId, 
            clientId,
        );
        if(!existWebhookHistory) throw new HttpException(
            EHttpExceptionMessage.WebHookHistoryNotExistId,
            HttpStatus.BAD_REQUEST,
        );
        const webhook = await this.webhookService.findById(existWebhookHistory.webhookId);
        if(!webhook) throw new HttpException(
            EHttpExceptionMessage.WebHookNotExistId,
            HttpStatus.INTERNAL_SERVER_ERROR,
        );
        const { error, message } = await this.sendWebhook(webhook.url, existWebhookHistory.data);
        await this.webhookHistoryService.updateById(dto.webhookHistoryId, {
            success: !error,
        });
        if(error) throw new HttpException(
            message,
            HttpStatus.BAD_REQUEST,
        );
        existWebhookHistory.clientId = undefined;
        return existWebhookHistory;
    }

    /**
    * Function that send webhooks
    * @name webhookHistoryWatcher
    * @kind function
    */
    webhookHistoryWatcher() {
        this.webhookHistoryService.createWatcher().on('change', async (next) => {
            if (next.operationType === 'insert') {
                const webhookHistory = next.fullDocument;
                const webhook = await this.webhookService.findById(webhookHistory.webhookId);
                if(!webhook) return
                const { error, message } = await this.sendWebhook(webhook.url, webhookHistory.data);
                await this.webhookHistoryService.updateById(webhookHistory._id, {
                    success: !error,
                });
            }
        })
    }

    /**
    * Function that send webhooks if user changed/created
    * @name usersWatcher
    * @kind function
    */
    usersWatcher() {
        this.usersService.createWatcher().on('change', this.watcherHandler(
            this.usersService, 
            'user', 
            {
                insert: EWebhookEvents.UserCreated,
                update: EWebhookEvents.UserUpdated,
                delete: EWebhookEvents.UserDeleted,
            }
        ))
    }

    /**
    * Function that send webhooks if webhook changed/created
    * @name webhookWatcher
    * @kind function
    */
    webhookWatcher() {
        this.webhookService.createWatcher().on('change', this.watcherHandler(
            this.webhookService, 
            'webhook', 
            {
                insert: EWebhookEvents.WebhookCreated,
                update: EWebhookEvents.WebhookUpdated,
                delete: EWebhookEvents.WebhookDeleted,
            }
        ))
    }

    /**
    * Function that send webhooks if user history created or deleted
    * @name usersHistoryWatcher
    * @kind function
    */
    usersHistoryWatcher() {
        this.userHistorysService.createWatcher().on('change', this.watcherHandler(
            this.userHistorysService, 
            'userHistory', 
            {
                insert: EWebhookEvents.UserHistoryCreated,
                delete: EWebhookEvents.UserHistoryDeleted,
            }
        ))
    }

    /**
    * Function that send webhooks if error created or deleted
    * @name errorsWatcher
    * @kind function
    */
    errorsWatcher() {
        this.errorsService.createWatcher().on('change', this.watcherHandler(
            this.errorsService, 
            'error', 
            {
                insert: EWebhookEvents.ErrorCreated,
                delete: EWebhookEvents.ErrorDeleted,
            }
        ))
    }

    /**
    * Function that send webhooks if client updated
    * @name clientsWatcher
    * @kind function
    */
     clientsWatcher() {
        this.clientsService.createWatcher().on('change', this.watcherHandler(
            this.clientsService, 
            'client', 
            {
                update: EWebhookEvents.ClientUpdated,
            }
        ))
    }

    /**
    * Function that send webhooks if usersRoom created or deleted
    * @name usersRoomsWatcher
    * @kind function
    */
     usersRoomsWatcher() {
        this.userRoomsService.createWatcher().on('change', this.watcherHandler(
            this.userRoomsService, 
            'userRoom', 
            {
                insert: EWebhookEvents.UserRoomsCreated,
                delete: EWebhookEvents.UserRoomsDeleted,
            }
        ))
    }

    private async sendWebhook(url, data) {
        const domain = urlModule.parse(url).hostname;
        const badLocal = domain === 'localhost' && process.env.USE_LOCAL_WEBHOOK !== 'true';
        if(!domain || badLocal) 
            return { error: true, message: EHttpExceptionMessage.InvalidDomain };
        try{
            await this.http.post(url, data).toPromise();
            return { error: false };
        }catch(e) {
            return { error: true, message: EHttpExceptionMessage.InvalidWebhookResponse };
        }
    }

    private watcherHandler(service: any, name: string, events: any) {
        return async (next) => {
            const data = await service.findById(next.documentKey._id);
            let event;
            const eventsName = Object.keys(events);
            try{
                for(const eventName of eventsName) {
                    if(next.operationType === eventName){
                        event = events[eventName];
                        break;
                    }
                }
                if(event) {
                    const webhooks: any[] = await this.webhookService.findByEventClient(
                        data.clientId,
                        event,
                    )
                    for(const webhook of webhooks) {
                        await this.webhookHistoryService.create({
                            clientId: data.clientId,
                            success: false,
                            webhookId: webhook._id,
                            data: { 
                                event,
                                name: webhook.name,
                                [name]: data,
                            }
                        });
                    }
                }
            }catch(e) {
                console.log(e);
            }
        }
    }
}
