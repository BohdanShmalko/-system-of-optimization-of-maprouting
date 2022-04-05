import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNumber, IsString } from 'class-validator';
import { BaseSearchDto } from './common.dto';

/**
* Search Webhooks History dto
* @name GetWebhooksHistoryDto
* @kind class
*/
export class GetWebhooksHistoryDto extends BaseSearchDto {

}

/**
* Resend Webhook dto
* @name ResendWebhookDto
* @kind class
*/
export class ResendWebhookDto {
    @ApiProperty({
        example: '6200e7b2b3cfeca3405f57f0',
        description: 'webhook history id',
    })
    @IsMongoId()
    webhookHistoryId: string;
}