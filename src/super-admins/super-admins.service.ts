import { ClientIdDto, CreateClientDto, GetClientDto, UpdateClientDto } from '@common';
import { Clients } from '@db';
import { Injectable } from '@nestjs/common';

/**
* SuperAdmins service class
* @name SuperAdminsService
* @kind class
*/
@Injectable()
export class SuperAdminsService {
    constructor() {
    }

    /**
    * Get clients
    * @name getClients
    * @kind function
    * @property {Object}  query  - query object dto
    * @property {Object}  req  - req object
    * @returns {Object} clients documents
    */
     getClients(req, query: GetClientDto): Promise<Clients[]> {
        return;
    }

    /**
    * Create new client
    * @name createNewClient
    * @kind function
    * @property {Object}  dto  - client dto
    * @property {Object}  req  - req object
    * @returns {Object} new client document
    */
    createNewClient(req, dto: CreateClientDto): Promise<Clients> {
        return;
    }

    /**
    * Update client
    * @name updateClient
    * @kind function
    * @property {Object}  dto  - update client dto
    * @property {Object}  param  - client id dto
    * @property {Object}  req  - req object
    * @returns {Object} new client document
    */
     updateClient(req, param: ClientIdDto, dto: UpdateClientDto): Promise<Clients> {
        return;
    }

    /**
    * Delete client
    * @name deleteClient
    * @kind function
    * @property {Object}  req  - req object
    * @property {Object}  param  - client id dto
    * @returns {string} delete status
    */
     deleteClient(req, param: ClientIdDto): Promise<string> {
        return;
    }
}
