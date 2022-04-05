import { BaseSearchDto } from '@common';
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

/**
* Error id dto
* @name ErrorIdDto
* @kind class
*/
export class ErrorIdDto {
    @ApiProperty({
        example: '6200e7b2b3cfeca3405f57f0',
        description: 'error id',
    })
    @IsMongoId()
    errorId: string;
}

/**
* Search errors dto
* @name GetErrorsDto
* @kind class
*/
export class GetErrorsDto extends BaseSearchDto {
    
}