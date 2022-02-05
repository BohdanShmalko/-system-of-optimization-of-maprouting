import { Injectable } from '@nestjs/common';

@Injectable()
export class RouteService {
    constructor() {
    }

    changeUserAlgorithm(): string {
        return 'Hello World!';
    }

    // routeToUser(): string {
    //     return 'Hello World!';
    // }

    routeToPlace(): string {
        return 'Hello World!';
    }
}
