import { Injectable } from '@nestjs/common';
import { ESort } from '../dto/common.dto';

export interface ISearch {
    pipeline: any,
    sort: any,
    limit: any,
    skip: any,
    select?: any,
}

/**
* Core service class
* @name CoreService
* @kind class
*/
@Injectable()
export class CoreService {
  constructor() {}


   /**
   * Get clients
   * @name getClients
   * @kind function
   * @property {Object}  query  - query object dto
   * @property {Object}  req  - req object
   * @returns {Object} clients documents
   */
   buildSearchPipeline(client, query): ISearch {
    const { dateFrom, dateTo, field, limit, skip, sort, sortField, values } = query;
    const pipeline = {
        clientId: client.isAdmin ? undefined : client.document._id,
        created_at: {
            $gte: dateTo,
            $lte: dateFrom,
        },
        [field] : {
            $in: values,
        },
    };
    return { pipeline, sort: { [sortField]: sort === ESort.DESC ? -1 : 1 }, limit, skip };
   }
}
