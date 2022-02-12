import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';


export class CommentDto {
    @ApiProperty({
      example: 'https://some.com/images/defaultPhoto.png',
      description: 'photo url',
    })
    @IsString({ message: 'must be string' })
    readonly photo: string;
  
    @ApiProperty({ example: 'Bob', description: 'Owner first name' })
    @IsString({ message: 'must be string' })
    readonly firstName: string;
  
    @ApiProperty({ example: 'Smith', description: 'Owner last name' })
    @IsString({ message: 'must be string' })
    readonly lastName: string;
  
    @ApiProperty({
      example: 'Good project',
      description: 'user comment to project',
    })
    @IsString({ message: 'must be string' })
    readonly comment: string;
  
    @ApiProperty({
      example: 1627545194979,
      description: 'Comment creation date',
    })
    @IsNumber({}, { message: 'must be number' })
    readonly date: number;
  }