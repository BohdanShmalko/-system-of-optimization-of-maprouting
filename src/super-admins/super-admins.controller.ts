import { 
    Controller, 
    Post, 
    UseGuards, 
    HttpCode, 
    Req, 
    Body, 
    Delete, 
    Param,
    Put,
    Get,
    Query
} from '@nestjs/common';
import { SuperAdminsApiService } from './super-admins.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Clients } from '@db';
import {
    Keys, 
    CreateClientDto, 
    ClientIdDto,
    UpdateClientDto,
    GetClientDto,
    AdminAuthGuard
} from '@common'

/**
* SuperAdmins controller
* @name SuperAdminsController
* @kind class
*/
@ApiTags('Super admins API')
@UseGuards(AdminAuthGuard)
@Controller('superadmins')
export class SuperAdminsController {
    constructor(private readonly service: SuperAdminsApiService) {}

    /**
    * Get clients
    * @name getClients
    * @kind event
    * @property {Object}  query  - query object dto
    * @property {Object}  req  - req object
    * @returns {Object} clients documents
    */
    @ApiOperation({ summary: 'Get clients' })
    @ApiResponse({ status: 200, type: () => Clients, isArray: true })
    @HttpCode(200)
    @Keys()
    @Get('client')
    getClients(
        @Req() req, 
        @Query() query: GetClientDto
    ): Promise<Clients[]> {
        return this.service.getClients(req, query);
    }
  
    /**
    * Create new client
    * @name createNewClient
    * @kind event
    * @property {Object}  dto  - create client dto
    * @property {Object}  req  - req object
    * @returns {Object} new client document
    */
    @ApiOperation({ summary: 'Create new client' })
    @ApiResponse({ status: 201, type: () => Clients })
    @HttpCode(201)
    @Keys()
    @Post('client')
    createNewClient(
        @Req() req, 
        @Body() dto: CreateClientDto
    ): Promise<Clients> {
        return this.service.createNewClient(req, dto);
    }
  
    /**
    * Update client
    * @name updateClient
    * @kind event
    * @property {Object}  dto  - update client dto
    * @property {Object}  param  - client id dto
    * @property {Object}  req  - req object
    * @returns {Object} new client document
    */
    @ApiOperation({ summary: 'Update client' })
    @ApiResponse({ status: 204, type: () => Clients })
    @HttpCode(204)
    @Keys()
    @Put('client/:clientId')
    updateClient(
        @Req() req, 
        @Param() param: ClientIdDto,
        @Body() dto: UpdateClientDto
    ): Promise<Clients> {
        return this.service.updateClient(req, param, dto);
    }
  
    /**
    * Delete client
    * @name deleteClient
    * @kind event
    * @property {Object}  req  - req object
    * @property {Object}  param  - client id dto
    * @returns {string} delete status
    */
    @ApiOperation({ summary: 'Delete client' })
    @ApiResponse({ status: 204, type: () => String })
    @HttpCode(204)
    @Keys()
    @Delete('client/:clientId')
    deleteClient(
        @Req() req, 
        @Param() param: ClientIdDto
    ): Promise<string> {
        return this.service.deleteClient(req, param);
    }
}
