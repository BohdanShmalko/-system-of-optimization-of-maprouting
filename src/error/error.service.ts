import { Injectable } from '@nestjs/common';

@Injectable()
export class ErrorService {
    constructor() {
    }

    /**
     * Some description
     * @typedef {Object} Config
     * @property {string}  name  - Name of the config.
     * @property {string}  color - Color of choice.
     */
    fixError(): string {
        return 'Hello World!';
    }
}
