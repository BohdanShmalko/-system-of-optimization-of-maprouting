import { BaseSearchDto, CoordinateDto } from '@common';
import { ETransports } from '@db';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsMongoId, IsNumber, IsString } from 'class-validator';

/**
* Create user history dto
* @name CreateUserHistoryDto
* @kind class
*/
export class CreateUserHistoryDto extends CoordinateDto {
    @ApiProperty({
        example: '6200e7b2b3cfeca3405f57f0',
        description: 'user id',
    })
    @IsMongoId()
    userId: string;

    @ApiProperty({
        example: 1649186190881,
        description: 'UTC time',
    })
    @IsNumber()
    time: number
}

/**
* Get location dto
* @name GetLocationDto
* @kind class
*/
export class GetLocationDto {
    @ApiProperty({
        example: '38.8951',
        description: 'start lat coordinate',
      })
    @IsString({ message: 'must be string' })
    startLat: string;

    @ApiProperty({
        example: '-77.0364',
        description: 'start lon coordinate',
      })
    @IsString({ message: 'must be string' })
    startLon: string;

    @ApiProperty({
        example: '31.8951',
        description: 'end lat coordinate',
    })
    @IsString({ message: 'must be string' })
    endLat: string;

    @ApiProperty({
        example: '-71.0364',
        description: 'end  coordinate',
      })
    @IsString({ message: 'must be string' })
    endLon: string;

    @ApiProperty({
        example: '6200e7b2b3cfeca3405f57f0',
        description: 'user id',
    })
    @IsMongoId()
    userId: string;

    @ApiProperty({
        example: 'car',
        description: 'location for transport',
    })
    @IsEnum(ETransports)
    transport: string;
}

/**
* Location steps dto
* @name LocationStepsDto
* @kind class
*/
export class LocationStepsDto {
    @ApiProperty({
        example: '6200e7b2b3cfeca3405f57f0',
        description: 'location id',
    })
    @IsMongoId()
    locationId: string;

    @ApiProperty({
        example: '31.8951',
        description: 'lat coordinate',
    })
    @IsString()
    lat: string;

    @ApiProperty({
        example: '-71.0364',
        description: 'lon coordinate',
    })
    @IsString()
    lon: string;

    @ApiProperty({
        example: 0,
        description: 'step number',
    })
    @IsNumber()
    step: number;
}

/**
* search user historys dto
* @name GetUserHistorysDto
* @kind class
*/
export class GetUserHistorysDto extends BaseSearchDto {
    
}