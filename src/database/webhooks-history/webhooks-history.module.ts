import {Module} from '@nestjs/common';
import {WebHooksHistory, WebHooksHistorySchema} from './webhooks-history.schema';
import {MongooseModule} from '@nestjs/mongoose';
import {WebHooksHistoryService} from './webhooks-history.service';

/**
* WebHooksHistory mongo module
* @name WebHooksHistoryModule
* @kind module
*/
@Module({
    imports: [
        MongooseModule.forFeature([
            {name: WebHooksHistory.name, schema: WebHooksHistorySchema},
        ]),
    ],
    exports: [WebHooksHistoryService],
    providers: [WebHooksHistoryService],
})
export class WebHooksHistoryModule {
}
