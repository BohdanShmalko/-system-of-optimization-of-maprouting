# Database

System for building the optimal route on the map use MongoDB database.

MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need. MongoDB’s document model is simple for developers to learn and use, while still providing all the capabilities needed to meet the most complex requirements at any scale.

## Connections scheme

![connections scheme](https://i.ibb.co/1Xvzsjm/database2.png)

## Collections

Collections in the MongoDB database (tables)

### Super Admins

System administrators who have access to internal system configurations and can create clients

| name        | type     | description        |
|-------------|----------|------------------- |
| _id         | ObjectId | Unique identifier  |
| apiKey      | string   | unique admin api key |
| name        | string   | unique admin name  |
| createdAt   | Date     | data creation time |
| updatedAt   | Date     | data update time   |

### Clients

Clients that use this system

| name        | type     | description        |
|-------------|----------|------------------- |
| _id         | ObjectId | Unique identifier  |
| apiKey      | string   | unique client api key |
| name        | string   | unique client name  |
| adminCreated| ObjectId | ref to superAdmin collection |
| createdAt   | Date     | data creation time |
| updatedAt   | Date     | data update time   |

### Webhooks

All client webhooks (for instant notification of the client)

| name        | type     | description        |
|-------------|----------|------------------- |
| _id         | ObjectId | Unique identifier  |
| clientId    | ObjectId | ref to client collection |
| url         | string   | client redirect url|
| event       | string   | system event       |
| name        | string   | client webhook name|
| createdAt   | Date     | data creation time |
| updatedAt   | Date     | data update time   |

### Webhooks History

All client webhooks history (for instant notification of the client)

| name        | type     | description        |
|-------------|----------|------------------- |
| _id         | ObjectId | Unique identifier  |
| webhookId   | ObjectId | ref to webhooks collection |
| data        | Mixed    | webhook data       |
| createdAt   | Date     | data creation time |
| updatedAt   | Date     | data update time   |

### Users

Data on registered users in the system

| name        | type     | description        |
|-------------|----------|------------------- |
| _id         | ObjectId | Unique identifier  |
| clientId    | ObjectId | ref to client collection |
| externalId  | string   | optional external id |
| optionalParams | Mixed | optional user params |
| algorithm   | string   | choosen algorithm     |
| createdAt   | Date     | data creation time |
| updatedAt   | Date     | data update time   |

### UsersHistory

The location of the user at a certain time

| name        | type     | description        |
|-------------|----------|------------------- |
| _id         | ObjectId | Unique identifier  |
| userId      | ObjectId | ref to user collection |
| lat         | string   | lat coordinate     |
| lon         | string   | lon coordinate     |
| time        | number   | time               |
| createdAt   | Date     | data creation time |
| updatedAt   | Date     | data update time   |

### Errors

Users errors

| name        | type     | description        |
|-------------|----------|------------------- |
| _id         | ObjectId | Unique identifier  |
| userId      | ObjectId | ref to user collection |
| message     | string   | error message      |
| createdAt   | Date     | data creation time |
| updatedAt   | Date     | data update time   |

### Rooms

Rooms in the system (for communication with websockets)

| name        | type     | description        |
|-------------|----------|------------------- |
| _id         | ObjectId | Unique identifier  |
| twoUsers    | boolean  | is two users in room |
| createdAt   | Date     | data creation time |
| updatedAt   | Date     | data update time   |

### UserRooms

Users in some room

| name        | type     | description        |
|-------------|----------|------------------- |
| _id         | ObjectId | Unique identifier  |
| userId      | ObjectId | ref to user collection |
| roomId      | ObjectId | ref to room collection |
| createdAt   | Date     | data creation time |
| updatedAt   | Date     | data update time   |

### Locations

Optimized locations in the system

| name        | type     | description        |
|-------------|----------|------------------- |
| _id         | ObjectId | Unique identifier  |
| startLat    | string   | start lat coordinate |
| startLon    | string   | start lon coordinate |
| endLat      | string   | end lat coordinate |
| endLon      | string   | end lon coordinate |
| algorithm   | string   | location algorithm |
| transport   | string   | location transport |
| createdAt   | Date     | data creation time |
| updatedAt   | Date     | data update time   |

### LocationSteps

Steps to move from one location to another

| name        | type     | description        |
|-------------|----------|------------------- |
| _id         | ObjectId | Unique identifier  |
| locationId  | ObjectId | ref to location collection |
| lat         | string   | lat coordinate     |
| lon         | string   | lon coordinate     |
| step        | number   | step to optimization |
| createdAt   | Date     | data creation time |
| updatedAt   | Date     | data update time   |



