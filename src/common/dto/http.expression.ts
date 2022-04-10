/**
* HttpExceptionMessage Enum
* @name EHttpExceptionMessage
* @kind namespace
*/
export enum EHttpExceptionMessage {
    ClientWithNameExist = 'Client with this name is already exist',
    ClientNotExistApiKey = 'Client with this apiKey is not exist',
    ClientNotExistId = 'Client with this id is not exist',
    Unauthorized = 'Not authorize user',
    InvalidQuery = 'Invalid query params',
    UserNotExistId = 'User with this id not exist on your client',
    WebHookExist = 'Webhook with this params is already exist you',
    WebHookNotExistId = 'Webhook with this id not exist on your client',
    InvalidUrl = 'Invalid url',
    ErrorNotExist = 'Error with this id not exist on your client',
    InvalidDomain = 'Invalid domain',
    InvalidWebhookResponse = 'Invalid webhook response',
    WebHookHistoryNotExistId = 'Webhook history with this id not exist on your client',
}
