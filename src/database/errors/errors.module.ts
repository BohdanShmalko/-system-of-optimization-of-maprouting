import { Module } from '@nestjs/common';
import { Errors, ErrorsSchema } from './errors.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ErrorsService } from './errors.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Errors.name, schema: ErrorsSchema },
        ]),
    ],
    exports: [ErrorsService],
    providers: [ErrorsService],
})
export class ErrorsModule {
}
