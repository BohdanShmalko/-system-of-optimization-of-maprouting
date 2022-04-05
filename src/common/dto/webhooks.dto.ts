import { EWebhookEvents } from '@db';
import { Optional } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsMongoId, IsNumber, IsString } from 'class-validator';
import { BaseSearchDto } from './common.dto';

/**
* Create Webhook dto
* @name CreateWebhookDto
* @kind class
*/
export class CreateWebhookDto {
    @ApiProperty({
        example: 'https://your.domain/webhooks',
        description: 'POST url to server that listen webhooks',
    })
    @IsString()
    url: string;

    @ApiProperty({
        example: 'Error Created',
        description: 'webhook name',
    })
    @IsEnum(EWebhookEvents)
    event: string;

    @ApiProperty({
        example: 'error_created',
        description: 'your webhook name',
    })
    @IsString()
    name: string;
}

/**
* Webhook Id dto
* @name WebhookIdDto
* @kind class
*/
export class WebhookIdDto {
    @ApiProperty({
        example: '6200e7b2b3cfeca3405f57f0',
        description: 'webhook history id',
    })
    @IsMongoId()
    webhookId: string;
}

/**
* Update Webhook dto
* @name UpdateWebhookDto
* @kind class
*/
export class UpdateWebhookDto {
    @Optional()
    @ApiPropertyOptional({
        example: 'https://your.domain/webhooks',
        description: 'POST url to server that listen webhooks',
    })
    @IsString()
    url: string;

    @Optional()
    @ApiPropertyOptional({
        example: 'Error Created',
        description: 'webhook name',
    })
    @IsEnum(EWebhookEvents)
    event: string;

    @Optional()
    @ApiPropertyOptional({
        example: 'error_created',
        description: 'your webhook name',
    })
    @IsString()
    name: string;
}

/**
* search Webhooks dto
* @name GetWebhooksDto
* @kind class
*/
export class GetWebhooksDto extends BaseSearchDto {
    
}