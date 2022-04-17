import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
* Coordinate dto
* @name CoordinateDto
* @kind class
*/
export class CoordinateDto {
    @ApiProperty({
      example: '38.8951',
      description: 'lat coordinate',
    })
    @IsString({ message: 'must be string' })
    lat: string;

    @ApiProperty({
      example: '-77.0364',
      description: 'lon coordinate',
    })
    @IsString({ message: 'must be string' })
    lon: string;
}