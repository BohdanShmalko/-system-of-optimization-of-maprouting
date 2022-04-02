import { Injectable } from '@nestjs/common';

/**
* Error service class
* @name ErrorService
* @kind class
*/
@Injectable()
export class ErrorService {
    constructor() {
    }

    /**
    * Save user error in database
    * @name fixError
    * @kind function
    * @property {Object}  data  - data
    * @returns {string} ok status
    */
    fixError(req): string {
        return 'Hello World!';
    }
}
