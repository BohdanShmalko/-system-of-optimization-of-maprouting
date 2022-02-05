import { Injectable } from '@nestjs/common';

@Injectable()
export class ErrorService {
    constructor() {
    }

    fixError(): string {
        return 'Hello World!';
    }
}
