import { 
    AuthService, 
    ClientIdDto, 
    CoreService, 
    CreateClientDto, 
    EHttpExceptionMessage, 
    GetClientDto, 
    UpdateClientDto 
} from '@common';
import { 
    Clients, 
    ClientsService, 
    ErrorsService, 
    SuperAdminsService, 
    UserHistorysService,
    UserRoomsService,
    UsersService,
    WebHooksHistoryService,
    WebHooksService
} from '@db';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

/**
* SuperAdmins service class
* @name SuperAdminsService
* @kind class
*/
@Injectable()
export class SuperAdminsApiService {
    constructor(
        private readonly superAdminsService: SuperAdminsService,
        private readonly clientsService: ClientsService,
        private readonly authService: AuthService,
        private readonly core: CoreService,
        private readonly webhooksService: WebHooksService,
        private readonly webhooksHistoryService: WebHooksHistoryService,
        private readonly usersService: UsersService,
        private readonly userRoomsService: UserRoomsService,
        private readonly userHistoryService: UserHistorysService,
        private readonly errorsService: ErrorsService,
    ) {}

    /**
    * Get clients
    * @name getClients
    * @kind function
    * @property {Object}  query  - query object dto
    * @property {Object}  req  - req object
    * @returns {Object} clients documents
    */
     async getClients(req, query: GetClientDto): Promise<Clients[]> {
        const searchObj = this.core.buildSearchPipeline(req.client, query);
        try {
            const result = await this.clientsService.search(searchObj);
            return result;
        }catch(e) {
            throw new HttpException(EHttpExceptionMessage.InvalidQuery, HttpStatus.BAD_REQUEST);
        }
    }

    /**
    * Create new client
    * @name createNewClient
    * @kind function
    * @property {Object}  dto  - client dto
    * @property {Object}  req  - req object
    * @returns {Object} new client document
    */
    async createNewClient(req, dto: CreateClientDto): Promise<Clients> {
        const adminId = req.client.document._id;
        const existingClient = await this.clientsService.findByName(dto.name);
        if(existingClient) throw new HttpException(
            EHttpExceptionMessage.ClientWithNameExist, 
            HttpStatus.CONFLICT
        );
        const newClient = await this.clientsService.createNewClient({
            ...dto,
            adminCreated: adminId,
            adminUpdated: adminId,
            apiKey: this.authService.generateApiKey(),
        });
        return newClient;
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
     async updateClient(req, param: ClientIdDto, dto: UpdateClientDto): Promise<Clients> {
        const adminId = req.client.document._id;
        const existingClient = await this.clientsService.findByApiKey(dto.apiKey);
        if(!existingClient) throw new HttpException(
            EHttpExceptionMessage.ClientNotExistApiKey, 
            HttpStatus.BAD_REQUEST
        );
        if(dto.name && existingClient.name !== dto.name) {
            const clientWithSameName = await this.clientsService.findByName(dto.name);
            if(clientWithSameName) throw new HttpException(
                EHttpExceptionMessage.ClientWithNameExist, 
                HttpStatus.CONFLICT
            );
        }
        const updatedClient = await this.clientsService.updateClientById(
            existingClient._id,
            {
                ...dto,
                apiKey: dto.newApiKey || dto.apiKey,
                adminUpdated: adminId,
            }
        );
        return updatedClient;
    }

    /**
    * Delete client
    * @name deleteClient
    * @kind function
    * @property {Object}  req  - req object
    * @property {Object}  param  - client id dto
    * @returns {string} delete status
    */
    async deleteClient(req, param: ClientIdDto): Promise<string> {
        const adminId = req.client.document._id;
        const clientId = param.clientId;
        const existingUser = await this.clientsService.findById(clientId);
        if(!existingUser) throw new HttpException(
            EHttpExceptionMessage.ClientNotExistApiKey, 
            HttpStatus.BAD_REQUEST
        );
        await this.errorsService.deleteByClientId(clientId);
        await this.userHistoryService.deleteByClientId(clientId);
        await this.userRoomsService.deleteByClientId(clientId);
        await this.usersService.deleteByClientId(clientId);
        await this.webhooksHistoryService.deleteByClientId(clientId);
        await this.webhooksService.deleteByClientId(clientId);
        await this.clientsService.deleteById(clientId);
        return 'ok';
    }
}
