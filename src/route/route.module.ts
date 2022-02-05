import { Module } from '@nestjs/common';
import { RouteController } from './route.controller';
import { RouteService } from './route.service';
import { LocationsModule, LocationStepsModule } from '@db/index'

@Module({
    imports: [
        LocationsModule,
        LocationStepsModule
    ],
    controllers: [RouteController],
    providers: [RouteService],
})
export class RouteModule {
}
