import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

/**
* Sort variants Enum
* @name ESort
* @kind namespace
*/
export enum ESort {
    DESC = 'desc',
    ASC = 'asc',
}

/**
* Sort fields variants Enum
* @name ESortFields
* @kind namespace
*/
export enum ESortFields {
    ID = '_id',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
}


/**
* Base search dto
* @name BaseSearchDto
* @kind class
*/
export class BaseSearchDto {
    @ApiPropertyOptional({
        example: 'desc',
        description: 'desc or asc',
        default: ESort.DESC
    })
    @IsOptional()
    @IsString()
    @IsEnum(ESort)
    sort = ESort.DESC;

    @ApiPropertyOptional({
        example: 'created_at',
        description: 'sort by this field (_id, created_at, updated_at)',
        default: ESortFields.ID
    })
    @IsOptional()
    @IsString()
    @IsEnum(ESortFields)
    sortField = ESortFields.ID;

    @ApiPropertyOptional({
        example: '_id',
        description: 'field that you want to find',
    })
    @IsOptional()
    @IsString()
    field!: string;

    @ApiPropertyOptional({
        example: '["6200e7b2b3cfeca3405f57f0", "61fd2eecf3f78493727204f0"]',
        description: 'JSON array with values that you want to find',
    })
    @Transform(({ value }) => {
        try{
            const res = JSON.parse(value);
            return res;
        }catch(e) {
            return value;
        }
    })
    @IsOptional()
    @IsArray()
    values!: any[];

    @ApiPropertyOptional({
        example: 1649186190881,
        description: 'UTC time from (created_at)',
    })
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10))
    @IsNumber()
    dateFrom!: number;

    @ApiPropertyOptional({
        example: 1649186190881,
        description: 'UTC time to (created_at)',
    })
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10))
    @IsNumber()
    dateTo!: number;

    @ApiPropertyOptional({
        example: 100,
        description: 'limit number',
    })
    @IsOptional()
    @Transform(({ value }) => {
        if(!value) return 500;
        const res = parseInt(value, 10);
        if(isNaN(res)) return value; // validation error
        return res <= 500 ? res : 500;
    })
    @IsNumber()
    limit!: number;

    @ApiPropertyOptional({
        example: 5,
        description: 'skip number',
    })
    @IsOptional()
    @Transform(({ value }) => value ? parseInt(value, 10) : 0)
    @IsNumber()
    skip!: number;
}