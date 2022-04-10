import { CoreService, EHttpExceptionMessage, GetWebhooksHistoryDto, ResendWebhookDto } from '@common';
import { ClientsService, ErrorsService, EWebhookEvents, UserHistorysService, UserRoomsService, UsersService, WebHooksHistory, WebHooksHistoryService, WebHooksService } from '@db';
import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
            const result = await this.webhookHistoryService.search({...searchObj, select: { clientId: -1 }});
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
        this.usersService.createWatcher().on('change', async (next) => {
            try{
                const user = await this.usersService.findById(next.documentKey._id);
                if (next.operationType === 'insert') {
                    const webhooks: any[] = await this.webhookService.findByEventClient(
                        user.clientId,
                        EWebhookEvents.UserCreated,
                    )
                    for(const webhook of webhooks) {
                        await this.webhookHistoryService.create({
                            clientId: user.clientId,
                            success: false,
                            webhookId: webhook._id,
                            data: { 
                                event: EWebhookEvents.UserCreated,
                                name: webhook.name,
                                user,
                            }
                        });
                    }
                } else if(next.operationType === 'update') {
                    //next.documentKey._id;
                } else if(next.object === 'delete') {
                    //next.documentKey._id;
                }
            }catch(e) {
                console.log(e);
            }
        })
    }

    /**
    * Function that send webhooks if webhook changed/created
    * @name webhookWatcher
    * @kind function
    */
    webhookWatcher() {
        this.webhookService.createWatcher().on('change', async (next) => {
            try{
                if (next.operationType === 'insert') {
                    //next.fullDocument;
                } else if(next.operationType === 'update') {
                    //next.documentKey._id;
                } else if(next.object === 'delete') {
                    //next.documentKey._id;
                }
            }catch(e) {
                console.log(e);
            }
        })
    }

    /**
    * Function that send webhooks if user history created or deleted
    * @name usersHistoryWatcher
    * @kind function
    */
    usersHistoryWatcher() {
        this.userHistorysService.createWatcher().on('change', async (next) => {
            try{
                if (next.operationType === 'insert') {
                    //next.fullDocument;
                } else if(next.object === 'delete') {
                    //next.documentKey._id;
                }
            }catch(e) {
                console.log(e);
            }
        })
    }

    /**
    * Function that send webhooks if error created or deleted
    * @name errorsWatcher
    * @kind function
    */
    errorsWatcher() {
        this.errorsService.createWatcher().on('change', async (next) => {
            try{
                if (next.operationType === 'insert') {
                    //next.fullDocument;
                } else if(next.object === 'delete') {
                    //next.documentKey._id;
                }
            }catch(e) {
                console.log(e);
            }
        })
    }

    /**
    * Function that send webhooks if client updated
    * @name clientsWatcher
    * @kind function
    */
     clientsWatcher() {
        this.clientsService.createWatcher().on('change', async (next) => {
            try{
                if(next.operationType === 'update') {
                    //next.documentKey._id;
                }
            }catch(e) {
                console.log(e);
            }
        })
    }

    /**
    * Function that send webhooks if usersRoom created or deleted
    * @name usersRoomsWatcher
    * @kind function
    */
     usersRoomsWatcher() {
        this.userRoomsService.createWatcher().on('change', async (next) => {
            try{
                if (next.operationType === 'insert') {
                    //next.fullDocument;
                } else if(next.object === 'delete') {
                    //next.documentKey._id;
                }
            }catch(e) {
                console.log(e);
            }
        })
    }

    private async sendWebhook(url, data) {
        const domain = urlModule.parse(url).hostname;
        if(!domain || domain === 'localhost') 
            return { error: true, message: EHttpExceptionMessage.InvalidDomain };
        try{
            await this.http.post(url, data);
            return { error: false };
        }catch(e) {
            return { error: true, message: EHttpExceptionMessage.InvalidWebhookResponse };
        }
    }
}
