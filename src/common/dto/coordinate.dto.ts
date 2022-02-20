import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CoordinateDto {
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