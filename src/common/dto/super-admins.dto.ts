import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsMongoId, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseSearchDto } from './common.dto';

/**
* Create Client dto
* @name CreateClientDto
* @kind class
*/
export class CreateClientDto {
    @ApiProperty({
        example: 'My cool client',
        description: 'client name',
    })
    @IsString()
    name: string;
}

/**
* Client Id dto
* @name ClientIdDto
* @kind class
*/
export class ClientIdDto {
    @ApiProperty({
        example: '6200e7b2b3cfeca3405f57f0',
        description: 'error id',
    })
    @IsMongoId()
    clientId: string;
}

/**
* Update Client dto
* @name UpdateClientDto
* @kind class
*/
export class UpdateClientDto {
    @IsOptional()
    @ApiPropertyOptional({
        example: 'My cool client',
        description: 'new client name',
    })
    @IsMongoId()
    name!: string;

    @IsOptional()
    @ApiPropertyOptional({
        example: '783fe2cf-329e-40bf-812b-1830ba3c80bb',
        description: 'new client apikey',
    })
    @IsString()
    apiKey!: string;
}

/**
* Search Client dto
* @name GetClientDto
* @kind class
*/
export class GetClientDto extends BaseSearchDto {
    
}