import { ErrorIdDto, GetErrorsDto } from '@common';
import { Errors } from '@db';
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
    * Get errors
    * @name getErrors
    * @kind function
    * @property {Object}  query  - query object dto
    * @property {Object}  req  - req object
    * @returns {Object} errors documents
    */
    getErrors(req, query: GetErrorsDto): Promise<Errors[]> {
      return;
    }

   /**
   * Delete error
   * @name deleteError
   * @kind function
   * @property {Object}  req  - req object
   * @property {Object}  param  - error id dto
   * @returns {string} delete status
   */
    deleteError(req, param: ErrorIdDto): Promise<string> {
        return;
    }
}
