import { Module } from '@nestjs/common';
import { WebHooks, WebHooksSchema } from './webhooks.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { WebHooksService } from './webhooks.service';

/**
* WebHooksModule mongo module
* @name WebHooksModule
* @kind module
*/
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: WebHooks.name, schema: WebHooksSchema },
        ]),
    ],
    exports: [WebHooksService],
    providers: [WebHooksService],
})
export class WebHooksModule {
}
