import { EWebhookEvents } from '@db';
import { Optional } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsMongoId, IsNumber, IsString } from 'class-validator';
import { BaseSearchDto } from './common.dto';

/**
* Ws Response dto
* @name WsResponseDto
* @kind class
*/
export class WsResponseDto {
    @ApiProperty({
        example: true,
        description: 'error flag',
    })
    @IsMongoId()
    hasError: boolean;

    @ApiProperty({
        example: {
            message: 'bad data',
            severEvent: 'serverConnect',
        },
        description: 'object with data',
    })
    @IsString()
    data: any;
}

/**
* Create Connection dto
* @name CreateConnectionDto
* @kind class
*/
export class CreateConnectionDto {
    @ApiProperty({
        example: '6200e7b2b3cfeca3405f57f0',
        description: 'system user id',
    })
    @IsMongoId()
    userId: string;

    @ApiProperty({
        example: '6200e7b2b-lll3cfeca340-ddd5f57f0',
        description: 'external unique your user id that has in this system',
    })
    @IsString()
    externalId: string;
}

/**
* Device Error dto
* @name DeviceErrorDto
* @kind class
*/
export class DeviceErrorDto extends CreateConnectionDto {
    @ApiProperty({
        example: 'device cannot give permissions',
        description: 'device error message',
    })
    @IsString()
    errorMessage: string;
}

/**
* Join Room dto
* @name JoinRoomDto
* @kind class
*/
export class JoinRoomDto extends CreateConnectionDto {
    @ApiProperty({
        example: 'dd00e7b2b3ddfecaddd5f57f0',
        description: 'system room id',
    })
    @IsMongoId()
    roomId: string;
}

/**
* UserLocationTimeDto dto
* @name UserLocationTimeDto
* @kind class
*/
export class UserLocationTimeDto extends CreateConnectionDto {
    @ApiProperty({
        example: 'device cannot give permissions',
        description: 'device error message',
    })
    @IsString()
    errorMessage: string;

    @ApiProperty({
        example: 1649186190881,
        description: 'UTC time',
    })
    @IsNumber()
    time: number

    @ApiProperty({
        example: '38.8951',
        description: 'lat coordinate',
    })
    @IsString({ message: 'must be string' })
    readonly lat: string;
  
    @ApiProperty({
        example: '-77.0364',
        description: 'lon coordinate',
    })
    @IsString({ message: 'must be string' })
    readonly lon: string;
}