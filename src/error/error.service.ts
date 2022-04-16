import { CoreService, EHttpExceptionMessage, ErrorIdDto, GetErrorsDto } from '@common';
import { Errors, ErrorsService } from '@db';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

/**
* Error service class
* @name ErrorService
* @kind class
*/
@Injectable()
export class ErrorService {
    constructor(
      private readonly errorsService: ErrorsService,
      private readonly core: CoreService,
    ) {
    }
    /**
    * Get errors
    * @name getErrors
    * @kind function
    * @property {Object}  query  - query object dto
    * @property {Object}  req  - req object
    * @returns {Object} errors documents
    */
    async getErrors(req, query: GetErrorsDto): Promise<Errors[]> {
      const searchObj = this.core.buildSearchPipeline(req.client, query);
    try {
        const result = await this.errorsService.search({...searchObj, select: { userId: 1, message: 1 }});
        return result;
    }catch(e) {
        throw new HttpException(EHttpExceptionMessage.InvalidQuery, HttpStatus.BAD_REQUEST);
    }
    }

   /**
   * Delete error
   * @name deleteError
   * @kind function
   * @property {Object}  req  - req object
   * @property {Object}  param  - error id dto
   * @returns {string} delete status
   */
    async deleteError(req, param: ErrorIdDto): Promise<string> {
      const errorId = param.errorId;
      const clientId = req.client.document._id;
      const existingDocument = await this.errorsService.findByIdAndClient(errorId, clientId);
      if(!existingDocument) throw new HttpException(
        EHttpExceptionMessage.ErrorNotExist, 
        HttpStatus.BAD_REQUEST
      );
      await this.errorsService.deleteById(errorId);
      return 'ok';
    }
}
