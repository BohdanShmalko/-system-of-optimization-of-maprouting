import { Module } from '@nestjs/common';
import { Devices, DevicesSchema } from './devices.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DevicesService } from './devices.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Devices.name, schema: DevicesSchema },
        ]),
    ],
    exports: [DevicesService],
    providers: [DevicesService],
})
export class DevicesModule {
}
