import { Injectable } from '@nestjs/common';
import { SuperAdminsService, ClientsService } from '@db';
import { uuid } from 'uuidv4';

/**
* Auth service class
* @name AuthService
* @kind class
*/
@Injectable()
export class AuthService {
    constructor(
        private superAdminsService: SuperAdminsService,
        private clientsService: ClientsService,
    ) {}

    /**
     * Get client by api key
     * @name getApiKeyData
     * @kind function
     * @property {string}  apikey  - string client or admin api key 
     * @returns {object} object with information about client
     */
    public async getApiKeyData(
        apikey: string,
    ): Promise<{ isAdmin: boolean, document: object | null, valid:boolean }> {
        const admin = await this.superAdminsService.findByApiKey(apikey);
        if(admin) return { isAdmin: true, document: admin, valid: true };
        const client = await this.clientsService.findByApiKey(apikey);
        if(client) return { isAdmin: false, document: client, valid: true };
        return { isAdmin: false, document: null, valid: false };
    }

    /**
     * Generate ne api key
     * @name generateApiKey
     * @kind function
     * @returns {string} new apiKey
     */
    public generateApiKey(): string {
        return uuid();
    }

    /**
     * Compares the values of two arrays
     * @name diff
     * @kind function
     * @property {string[]}  a1  - array #1
     * @property {string[]}  a2  - array #2
     * @returns {boolean} is same arrays
     */
    public diff(documentKeys: string[], keys: string[]): boolean {
        for(const key of keys){
            if(!documentKeys.includes(key)) return false;
        }
        return true;
    }
}
