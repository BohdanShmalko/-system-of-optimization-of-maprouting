# Testing of the system for building the optimal route on the map

## Test objects

The object of testing is the system for building the optimal route on the map as well as its individual modules and components that affect the speed and reliability of the system

## Purpose of the test

Check the reliability of the system and its individual functions

## System requirements

The system must not lead to failure (fatal malfunction of the system) and must meet the following requirements:

* Perform the function assigned to him
* In case of system error - to inform the user with the status 500
* In case of non-compliance with the requirements of the API by the user - notify him with a status of 40x
* Ensure reliable interaction with the user
* Ensure reliable interaction with the database
* Support multiple devices for one user
* Generate documentation
* Generate api specification
* Generate system coverage

## Requirements for software documentation

- [ГОСТ 19.402-78.](https://docs.cntd.ru/document/1200007652) ЕСПД. Program description
- [ГОСТ 19.301-79.](https://docs.cntd.ru/document/1200007650) ЕСПД. Test program and methods. Requirements for content and design
- [ГОСТ 19.401-78.](https://docs.cntd.ru/document/1200007651) ЕСПД. Program text. Requirements for content and design

## Means and procedure of tests

To run test suites, use the jest library and the JavaScript package manager - npm (Node Package Manager), and the command `npm test`

Test procedure:
1. ErrorService
2. ErrorController
3. LocationService
4. LocationController
5. SuperAdminsApiController
6. SuperAdminsApiService
7. UserService
8. UserController
9. WebhooksController
10. WebhooksService

## Test methods

The following lists of test sets and individual test examples are offered for testing:

**ErrorService**

* deleteError - catch the event from the controller and interact with the service for delete user error
* getErrors - catch the event from the controller and interact with the service for search with another filters users errors

**ErrorController**

* deleteError - catch the event from the client and interact with the service for delete user error
* getErrors - catch the event from the client and interact with the service for search with another filters users errors

**LocationService**

* fixUserLocation - catch the event from the controller and interact with the service for fix user location
* getRoute - catch the event from the controller and interact with the service for search route from one place to another
* getUserLocation - catch the event from the controller and interact with the service for sarch user location with another filters

**LocationController**

* fixUserLocation - catch the event from the client and interact with the service for fix user location
* getRoute - catch the event from the client and interact with the service for search route from one place to another
* getUserLocation - catch the event from the client and interact with the service for sarch user location with another filters

**SuperAdminsApiController**

* createNewClient - catch the event from the admin and interact with the service for create new client
* deleteClient - catch the event from the admin and interact with the service for delete client and all relative with it
* getClients - catch the event from the admin and interact with the service for search clients with another filters
* updateClient - catch the event from the admin and interact with the service for update client data

**SuperAdminsApiService**

* createNewClient - catch the event from the controller and interact with the service for create new client
* deleteClient - catch the event from the controller and interact with the service for delete client and all relative with it
* getClients - catch the event from the controller and interact with the service for search clients with another filters
* updateClient - catch the event from the controller and interact with the service for update client data

**UserService**

* createNewUser - catch the event from the client and interact with the service for create new user
* deleteUser - catch the event from the client and interact with the service for delete user with all revative with it
* getUsers - catch the event from the client and interact with the service for search user with another filters
* updateUser - catch the event from the client and interact with the service for update user data

**UserController**

* createNewUser - catch the event from the controller and interact with the service for create new user
* deleteUser - catch the event from the controller and interact with the service for delete user with all revative with it
* getUsers - catch the event from the controller and interact with the service for search user with another filters
* updateUser - catch the event from the controller and interact with the service for update user data

**WebhooksController**

* getWebhooks - catch the event from the client and interact with the service for search webhooks with another filters
* createNewWebhook - catch the event from the client and interact with the service for create new webhook
* deleteWebhook - catch the event from the client and interact with the service for delete webhook
* updateWebhook - catch the event from the client and interact with the service for update webhook data

**WebhooksService**

* getWebhooks - catch the event from the controller and interact with the service for search webhooks with another filters
* createNewWebhook - catch the event from the controller and interact with the service for create new webhook
* deleteWebhook - catch the event from the controller and interact with the service for delete webhook
* updateWebhook - catch the event from the controller and interact with the service for update webhook data

## Addition

The content of test files, the results of testing the software module and extended information about the test coverage, which averaged 70.74%
