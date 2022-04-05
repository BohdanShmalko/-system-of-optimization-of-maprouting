import { EAlgorithms } from '@db';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsMongoId, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { BaseSearchDto } from './common.dto';

/**
* Create User dto
* @name CreateUserDto
* @kind class
*/
export class CreateUserDto {
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Bipartite Subset',
        description: 'search algorithm for this user',
        default: 'Bipartite Subset',
    })
    @IsEnum(EAlgorithms)
    algorithm!: string;

    @IsOptional()
    @ApiPropertyOptional({
        example: {
            email: 'my user email',
            phone: '+111111111',
        },
        description: 'all user optional information',
        default: 'Bipartite Subset',
    })
    @IsObject()
    optionalParams!: object;

    @IsOptional()
    @ApiPropertyOptional({
        example: '2536045',
        description: 'optional external user id',
        default: 'Bipartite Subset',
    })
    @IsString()
    externalId!: string;
}

/**
* User Id dto
* @name UserIdDto
* @kind class
*/
export class UserIdDto {
    @ApiProperty({
        example: '6200e7b2b3cfeca3405f57f0',
        description: 'user id',
    })
    @IsMongoId()
    userId: string;
}

/**
* Update User dto
* @name UpdateUserDto
* @kind class
*/
export class UpdateUserDto {
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Bipartite Subset',
        description: 'search algorithm for this user',
        default: 'Bipartite Subset',
    })
    @IsEnum(EAlgorithms)
    algorithm!: string;

    @IsOptional()
    @ApiPropertyOptional({
        example: {
            email: 'my user email',
            phone: '+111111111',
        },
        description: 'all user optional information',
        default: 'Bipartite Subset',
    })
    @IsObject()
    optionalParams!: object;

    @IsOptional()
    @ApiPropertyOptional({
        example: '2536045',
        description: 'optional external user id',
        default: 'Bipartite Subset',
    })
    @IsString()
    externalId!: string;
}

/**
* Search Users dto
* @name GetUsersDto
* @kind class
*/
export class GetUsersDto extends BaseSearchDto {
    
}