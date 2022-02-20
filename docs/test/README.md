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
1. WsService
2. WsGateway
3. UserService
4. UserController
5. RouteService
6. RouteController
7. LocationService
8. LocationController
9. ErrorService
10. ErrorController
11. AuthService
12. JwtAuthGuard

Jest reporter is used to process test results and create a test report in HTML

## Test methods

The following lists of test sets and individual test examples are offered for testing:

** WsService **

* afterInit - notify the system that it is ready for use
* handleConnection - notify other users when a new one appears on the map
* handleDisconnect - notify other users about the disappearance of the user on the map
* handleErrorDevice - 
* handleUpdateLocation - 
* handleRouteUser - 

** WsGateway **

* afterInit - catch the event from the system and interact with the service for notify the system that it is ready for use
* handleConnection - catch the event from the user and interact with the service for notify other users when a new one appears on the map
* handleDisconnect - catch the event from the user and interact with the service for notify other users about the disappearance of the user on the map
* handleErrorDevice - catch the event from the user and interact with the service for
* handleUpdateLocation - catch the event from the user and interact with the service for
* handleRouteUser - catch the event from the user and interact with the service for

** UserService **

* loginUser - 
* sendCode - 
* confirmCode -

** UserController **

* loginUser - catch the event from the user and interact with the service for
* sendCode - catch the event from the user and interact with the service for
* confirmCode - catch the event from the user and interact with the service for

** RouteService **

* changeUserAlgorithm -
* routeToPlace - 

** RouteController **

* changeUserAlgorithm - catch the event from the user and interact with the service for
* routeToPlace - catch the event from the user and interact with the service for

** LocationService **

* fixUserLocation - 

** LocationController **

* fixUserLocation - catch the event from the user and interact with the service for

** ErrorService **

* fixError - 

** ErrorController **

* fixError - catch the event from the user and interact with the service for

** AuthService **

* getJwtData - 
* generateToken - 
* diff - 

** JwtAuthGuard **

* canActivate - 

## Addition

The content of test files, the results of testing the software module and extended information about the test coverage, which averaged 70.74%, is given in [Jest document]()...
