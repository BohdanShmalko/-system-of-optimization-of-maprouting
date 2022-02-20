## Modules

<dl>
<dt><a href="#module_AppModule">AppModule</a></dt>
<dd><p>App module</p>
</dd>
<dt><a href="#module_AuthModule">AuthModule</a></dt>
<dd><p>Auth module</p>
</dd>
<dt><a href="#module_ActivePhonesModule">ActivePhonesModule</a></dt>
<dd><p>ActivePhones mongo module</p>
</dd>
<dt><a href="#module_ErrorsModule">ErrorsModule</a></dt>
<dd><p>Devices mongo module</p>
</dd>
<dt><a href="#module_ErrorsModule">ErrorsModule</a></dt>
<dd><p>Errors mongo module</p>
</dd>
<dt><a href="#module_LocationStepsModule">LocationStepsModule</a></dt>
<dd><p>LocationSteps mongo module</p>
</dd>
<dt><a href="#module_LocationsModule">LocationsModule</a></dt>
<dd><p>Locations mongo module</p>
</dd>
<dt><a href="#module_RoomsModule">RoomsModule</a></dt>
<dd><p>Rooms mongo module</p>
</dd>
<dt><a href="#module_UserLocationsModule">UserLocationsModule</a></dt>
<dd><p>UserLocations mongo module</p>
</dd>
<dt><a href="#module_UserRoomsModule">UserRoomsModule</a></dt>
<dd><p>UserRooms mongo module</p>
</dd>
<dt><a href="#module_UsersModule">UsersModule</a></dt>
<dd><p>Users mongo module</p>
</dd>
<dt><a href="#module_ErrorModule">ErrorModule</a></dt>
<dd><p>Error module</p>
</dd>
<dt><a href="#module_LocationModule">LocationModule</a></dt>
<dd><p>Location module</p>
</dd>
<dt><a href="#module_RouteModule">RouteModule</a></dt>
<dd><p>Route module</p>
</dd>
<dt><a href="#module_UserModule">UserModule</a></dt>
<dd><p>User module</p>
</dd>
<dt><a href="#module_WsModule">WsModule</a></dt>
<dd><p>Websocket module</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#JwtAuthGuard">JwtAuthGuard</a></dt>
<dd></dd>
<dt><a href="#ErrorService">ErrorService</a></dt>
<dd></dd>
<dt><a href="#ActivePhonesSchema">ActivePhonesSchema</a></dt>
<dd></dd>
<dt><a href="#ActivePhonesService">ActivePhonesService</a></dt>
<dd></dd>
<dt><a href="#DevicesSchema">DevicesSchema</a></dt>
<dd></dd>
<dt><a href="#DevicesService">DevicesService</a></dt>
<dd></dd>
<dt><a href="#ErrorsSchema">ErrorsSchema</a></dt>
<dd></dd>
<dt><a href="#ErrorsService">ErrorsService</a></dt>
<dd></dd>
<dt><a href="#LocationStepsSchema">LocationStepsSchema</a></dt>
<dd></dd>
<dt><a href="#LocationStepsService">LocationStepsService</a></dt>
<dd></dd>
<dt><a href="#LocationsSchema">LocationsSchema</a></dt>
<dd></dd>
<dt><a href="#LocationsService">LocationsService</a></dt>
<dd></dd>
<dt><a href="#RoomsSchema">RoomsSchema</a></dt>
<dd></dd>
<dt><a href="#RoomsService">RoomsService</a></dt>
<dd></dd>
<dt><a href="#UserLocationsSchema">UserLocationsSchema</a></dt>
<dd></dd>
<dt><a href="#UserLocationsService">UserLocationsService</a></dt>
<dd></dd>
<dt><a href="#UserRoomsSchema">UserRoomsSchema</a></dt>
<dd></dd>
<dt><a href="#UserRoomsService">UserRoomsService</a></dt>
<dd></dd>
<dt><a href="#UsersSchema">UsersSchema</a></dt>
<dd></dd>
<dt><a href="#UsersService">UsersService</a></dt>
<dd></dd>
<dt><a href="#ErrorController">ErrorController</a></dt>
<dd></dd>
<dt><a href="#ErrorService">ErrorService</a></dt>
<dd></dd>
<dt><a href="#LocationController">LocationController</a></dt>
<dd></dd>
<dt><a href="#LocationService">LocationService</a></dt>
<dd></dd>
<dt><a href="#RouteController">RouteController</a></dt>
<dd></dd>
<dt><a href="#RouteService">RouteService</a></dt>
<dd></dd>
<dt><a href="#UserController">UserController</a></dt>
<dd></dd>
<dt><a href="#UserService">UserService</a></dt>
<dd></dd>
<dt><a href="#WsGateway">WsGateway</a></dt>
<dd></dd>
<dt><a href="#WsService">WsService</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#canActivate">canActivate</a> ⇒ <code>boolean</code></dt>
<dd><p>Guard. Checks the jwt token, decrypts it and transmits data to the controller</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#EHttpExceptionMessage">EHttpExceptionMessage</a> : <code>object</code></dt>
<dd><p>HttpExceptionMessage Enum</p>
</dd>
<dt><a href="#ECollections">ECollections</a> : <code>object</code></dt>
<dd><p>Mongo collections Enum</p>
</dd>
<dt><a href="#EDevices">EDevices</a> : <code>object</code></dt>
<dd><p>Devices Enum</p>
</dd>
<dt><a href="#EAlgorithms">EAlgorithms</a> : <code>object</code></dt>
<dd><p>Algorithms Enum</p>
</dd>
<dt><a href="#WsEnum">WsEnum</a> : <code>object</code></dt>
<dd><p>Websocket Enum</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#MIDDLE_KEYS">MIDDLE_KEYS</a></dt>
<dd><p>middle keys constant</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#Keys">Keys()</a> ⇒ <code>object</code></dt>
<dd><p>Decorator. Passes to the guard the keys that must be in the token</p>
</dd>
<dt><a href="#getJwtData">getJwtData()</a> ⇒ <code>boolean</code></dt>
<dd><p>Get data from jwt token</p>
</dd>
<dt><a href="#generateToken">generateToken()</a> ⇒ <code>string</code></dt>
<dd><p>Generate jwt token</p>
</dd>
<dt><a href="#diff">diff()</a> ⇒ <code>boolean</code></dt>
<dd><p>Compares the values of two arrays</p>
</dd>
<dt><a href="#fixError">fixError()</a> ⇒ <code>string</code></dt>
<dd><p>Save user location in database</p>
</dd>
<dt><a href="#fixUserLocation">fixUserLocation()</a> ⇒ <code>string</code></dt>
<dd><p>Save user location in database</p>
</dd>
<dt><a href="#bootstrap">bootstrap()</a></dt>
<dd><p>Main app function</p>
</dd>
<dt><a href="#changeUserAlgorithm">changeUserAlgorithm()</a> ⇒ <code>string</code></dt>
<dd><p>Change user diskret algorithm for finding rout on map</p>
</dd>
<dt><a href="#routeToPlace">routeToPlace()</a> ⇒ <code>string</code></dt>
<dd><p>Create route for static place</p>
</dd>
<dt><a href="#loginUser">loginUser()</a> ⇒ <code>string</code></dt>
<dd><p>Login user by token (beta)</p>
</dd>
<dt><a href="#sendCode">sendCode()</a> ⇒ <code>string</code></dt>
<dd><p>Send code for user phone</p>
</dd>
<dt><a href="#confirmCode">confirmCode()</a> ⇒ <code>string</code></dt>
<dd><p>Confirm phone code</p>
</dd>
<dt><a href="#afterInit">afterInit()</a></dt>
<dd><p>Init websocket server</p>
</dd>
<dt><a href="#handleConnection">handleConnection()</a> ⇒ <code>Object</code></dt>
<dd><p>User connect</p>
</dd>
<dt><a href="#handleDisconnect">handleDisconnect()</a></dt>
<dd><p>User disconnect</p>
</dd>
<dt><a href="#handleErrorDevice">handleErrorDevice()</a> ⇒ <code>Object</code></dt>
<dd><p>Error in on of the user device</p>
</dd>
<dt><a href="#handleUpdateLocation">handleUpdateLocation()</a> ⇒ <code>Object</code></dt>
<dd><p>Update user location for all users in the range</p>
</dd>
<dt><a href="#handleRouteUser">handleRouteUser()</a> ⇒ <code>Object</code></dt>
<dd><p>Update user route for two users</p>
</dd>
</dl>

## Events

<dl>
<dt><a href="#event_fixError">"fixError"</a> ⇒ <code>string</code></dt>
<dd><p>Save user location in database</p>
</dd>
<dt><a href="#event_fixUserLocation">"fixUserLocation"</a> ⇒ <code>string</code></dt>
<dd><p>Save user location in database</p>
</dd>
<dt><a href="#event_routeToPlace">"routeToPlace"</a> ⇒ <code>string</code></dt>
<dd><p>Create route for static place</p>
</dd>
<dt><a href="#event_changeUserAlgorithm">"changeUserAlgorithm"</a> ⇒ <code>string</code></dt>
<dd><p>Change user diskret algorithm for finding rout on map</p>
</dd>
<dt><a href="#event_sendCode">"sendCode"</a> ⇒ <code>string</code></dt>
<dd><p>Send code for user phone</p>
</dd>
<dt><a href="#event_confirmCode">"confirmCode"</a> ⇒ <code>string</code></dt>
<dd><p>Confirm phone code</p>
</dd>
<dt><a href="#event_loginByToken">"loginByToken"</a> ⇒ <code>string</code></dt>
<dd><p>Login user by token (beta)</p>
</dd>
<dt><a href="#event_afterInit">"afterInit"</a></dt>
<dd><p>Init websocket server</p>
</dd>
<dt><a href="#event_handleConnection">"handleConnection"</a> ⇒ <code>Object</code></dt>
<dd><p>User connect</p>
</dd>
<dt><a href="#event_handleDisconnect">"handleDisconnect"</a></dt>
<dd><p>User disconnect</p>
</dd>
<dt><a href="#event_handleErrorDevice">"handleErrorDevice"</a> ⇒ <code>Object</code></dt>
<dd><p>Error in on of the user device</p>
</dd>
<dt><a href="#event_handleUpdateLocation">"handleUpdateLocation"</a> ⇒ <code>Object</code></dt>
<dd><p>Update user location for all users in the range</p>
</dd>
</dl>

<a name="module_AppModule"></a>

## AppModule
App module

<a name="module_AuthModule"></a>

## AuthModule
Auth module

<a name="module_ActivePhonesModule"></a>

## ActivePhonesModule
ActivePhones mongo module

<a name="module_ErrorsModule"></a>

## ErrorsModule
Devices mongo module

<a name="module_ErrorsModule"></a>

## ErrorsModule
Errors mongo module

<a name="module_LocationStepsModule"></a>

## LocationStepsModule
LocationSteps mongo module

<a name="module_LocationsModule"></a>

## LocationsModule
Locations mongo module

<a name="module_RoomsModule"></a>

## RoomsModule
Rooms mongo module

<a name="module_UserLocationsModule"></a>

## UserLocationsModule
UserLocations mongo module

<a name="module_UserRoomsModule"></a>

## UserRoomsModule
UserRooms mongo module

<a name="module_UsersModule"></a>

## UsersModule
Users mongo module

<a name="module_ErrorModule"></a>

## ErrorModule
Error module

<a name="module_LocationModule"></a>

## LocationModule
Location module

<a name="module_RouteModule"></a>

## RouteModule
Route module

<a name="module_UserModule"></a>

## UserModule
User module

<a name="module_WsModule"></a>

## WsModule
Websocket module

<a name="JwtAuthGuard"></a>

## JwtAuthGuard
**Kind**: global class  
<a name="new_JwtAuthGuard_new"></a>

### new JwtAuthGuard()
JwtAuth Guard

<a name="ErrorService"></a>

## ErrorService
**Kind**: global class  

* [ErrorService](#ErrorService)
    * [new ErrorService()](#new_ErrorService_new)
    * [new ErrorService()](#new_ErrorService_new)

<a name="new_ErrorService_new"></a>

### new ErrorService()
Error service class

<a name="new_ErrorService_new"></a>

### new ErrorService()
Error service class

<a name="ActivePhonesSchema"></a>

## ActivePhonesSchema
**Kind**: global class  
<a name="new_ActivePhonesSchema_new"></a>

### new ActivePhonesSchema()
ActivePhones schema

<a name="ActivePhonesService"></a>

## ActivePhonesService
**Kind**: global class  
<a name="new_ActivePhonesService_new"></a>

### new ActivePhonesService()
ActivePhonesService database service

<a name="DevicesSchema"></a>

## DevicesSchema
**Kind**: global class  
<a name="new_DevicesSchema_new"></a>

### new DevicesSchema()
Devices schema

<a name="DevicesService"></a>

## DevicesService
**Kind**: global class  
<a name="new_DevicesService_new"></a>

### new DevicesService()
DevicesService database service

<a name="ErrorsSchema"></a>

## ErrorsSchema
**Kind**: global class  
<a name="new_ErrorsSchema_new"></a>

### new ErrorsSchema()
Errors schema

<a name="ErrorsService"></a>

## ErrorsService
**Kind**: global class  
<a name="new_ErrorsService_new"></a>

### new ErrorsService()
ErrorsService database service

<a name="LocationStepsSchema"></a>

## LocationStepsSchema
**Kind**: global class  
<a name="new_LocationStepsSchema_new"></a>

### new LocationStepsSchema()
LocationSteps schema

<a name="LocationStepsService"></a>

## LocationStepsService
**Kind**: global class  
<a name="new_LocationStepsService_new"></a>

### new LocationStepsService()
LocationStepsService database service

<a name="LocationsSchema"></a>

## LocationsSchema
**Kind**: global class  
<a name="new_LocationsSchema_new"></a>

### new LocationsSchema()
Locations schema

<a name="LocationsService"></a>

## LocationsService
**Kind**: global class  
<a name="new_LocationsService_new"></a>

### new LocationsService()
LocationsService database service

<a name="RoomsSchema"></a>

## RoomsSchema
**Kind**: global class  
<a name="new_RoomsSchema_new"></a>

### new RoomsSchema()
Rooms schema

<a name="RoomsService"></a>

## RoomsService
**Kind**: global class  
<a name="new_RoomsService_new"></a>

### new RoomsService()
RoomsService database service

<a name="UserLocationsSchema"></a>

## UserLocationsSchema
**Kind**: global class  
<a name="new_UserLocationsSchema_new"></a>

### new UserLocationsSchema()
UserLocations schema

<a name="UserLocationsService"></a>

## UserLocationsService
**Kind**: global class  
<a name="new_UserLocationsService_new"></a>

### new UserLocationsService()
UserLocationsService database service

<a name="UserRoomsSchema"></a>

## UserRoomsSchema
**Kind**: global class  
<a name="new_UserRoomsSchema_new"></a>

### new UserRoomsSchema()
UserRooms schema

<a name="UserRoomsService"></a>

## UserRoomsService
**Kind**: global class  
<a name="new_UserRoomsService_new"></a>

### new UserRoomsService()
UserRoomsService database service

<a name="UsersSchema"></a>

## UsersSchema
**Kind**: global class  
<a name="new_UsersSchema_new"></a>

### new UsersSchema()
Users schema

<a name="UsersService"></a>

## UsersService
**Kind**: global class  
<a name="new_UsersService_new"></a>

### new UsersService()
UsersService database service

<a name="ErrorController"></a>

## ErrorController
**Kind**: global class  
<a name="new_ErrorController_new"></a>

### new ErrorController()
Error controller

<a name="ErrorService"></a>

## ErrorService
**Kind**: global class  

* [ErrorService](#ErrorService)
    * [new ErrorService()](#new_ErrorService_new)
    * [new ErrorService()](#new_ErrorService_new)

<a name="new_ErrorService_new"></a>

### new ErrorService()
Error service class

<a name="new_ErrorService_new"></a>

### new ErrorService()
Error service class

<a name="LocationController"></a>

## LocationController
**Kind**: global class  
<a name="new_LocationController_new"></a>

### new LocationController()
Location controller

<a name="LocationService"></a>

## LocationService
**Kind**: global class  
<a name="new_LocationService_new"></a>

### new LocationService()
Location service class

<a name="RouteController"></a>

## RouteController
**Kind**: global class  
<a name="new_RouteController_new"></a>

### new RouteController()
Route controller

<a name="RouteService"></a>

## RouteService
**Kind**: global class  
<a name="new_RouteService_new"></a>

### new RouteService()
Route service class

<a name="UserController"></a>

## UserController
**Kind**: global class  
<a name="new_UserController_new"></a>

### new UserController()
User controller

<a name="UserService"></a>

## UserService
**Kind**: global class  
<a name="new_UserService_new"></a>

### new UserService()
User service class

<a name="WsGateway"></a>

## WsGateway
**Kind**: global class  
<a name="new_WsGateway_new"></a>

### new WsGateway()
Websocket Gateway

<a name="WsService"></a>

## WsService
**Kind**: global class  
<a name="new_WsService_new"></a>

### new WsService()
Websocket service class

<a name="canActivate"></a>

## canActivate ⇒ <code>boolean</code>
Guard. Checks the jwt token, decrypts it and transmits data to the controller

**Kind**: global variable  
**Returns**: <code>boolean</code> - valid status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| context | <code>Object</code> | ExecutionContext from @nestjs/common |

<a name="EHttpExceptionMessage"></a>

## EHttpExceptionMessage : <code>object</code>
HttpExceptionMessage Enum

**Kind**: global namespace  
<a name="ECollections"></a>

## ECollections : <code>object</code>
Mongo collections Enum

**Kind**: global namespace  
<a name="EDevices"></a>

## EDevices : <code>object</code>
Devices Enum

**Kind**: global namespace  
<a name="EAlgorithms"></a>

## EAlgorithms : <code>object</code>
Algorithms Enum

**Kind**: global namespace  
<a name="WsEnum"></a>

## WsEnum : <code>object</code>
Websocket Enum

**Kind**: global namespace  
<a name="MIDDLE_KEYS"></a>

## MIDDLE\_KEYS
middle keys constant

**Kind**: global constant  
<a name="Keys"></a>

## Keys() ⇒ <code>object</code>
Decorator. Passes to the guard the keys that must be in the token

**Kind**: global function  
**Returns**: <code>object</code> - SetMetadata - metadata class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| keys | <code>Array.&lt;string&gt;</code> | array with keys |

<a name="getJwtData"></a>

## getJwtData() ⇒ <code>boolean</code>
Get data from jwt token

**Kind**: global function  
**Returns**: <code>boolean</code> - is valid jwt token  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| authData | <code>Object</code> | object with token |
| authData.token | <code>string</code> | jwt token |

<a name="generateToken"></a>

## generateToken() ⇒ <code>string</code>
Generate jwt token

**Kind**: global function  
**Returns**: <code>string</code> - jwt token  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | data that want to encrypt |

<a name="diff"></a>

## diff() ⇒ <code>boolean</code>
Compares the values of two arrays

**Kind**: global function  
**Returns**: <code>boolean</code> - is same arrays  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| a1 | <code>Array.&lt;string&gt;</code> | array #1 |
| a2 | <code>Array.&lt;string&gt;</code> | array #2 |

<a name="fixError"></a>

## fixError() ⇒ <code>string</code>
Save user location in database

**Kind**: global function  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="fixUserLocation"></a>

## fixUserLocation() ⇒ <code>string</code>
Save user location in database

**Kind**: global function  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="bootstrap"></a>

## bootstrap()
Main app function

**Kind**: global function  
<a name="changeUserAlgorithm"></a>

## changeUserAlgorithm() ⇒ <code>string</code>
Change user diskret algorithm for finding rout on map

**Kind**: global function  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="routeToPlace"></a>

## routeToPlace() ⇒ <code>string</code>
Create route for static place

**Kind**: global function  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="loginUser"></a>

## loginUser() ⇒ <code>string</code>
Login user by token (beta)

**Kind**: global function  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="sendCode"></a>

## sendCode() ⇒ <code>string</code>
Send code for user phone

**Kind**: global function  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="confirmCode"></a>

## confirmCode() ⇒ <code>string</code>
Confirm phone code

**Kind**: global function  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="afterInit"></a>

## afterInit()
Init websocket server

**Kind**: global function  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| server | <code>Object</code> | websocket server |

<a name="handleConnection"></a>

## handleConnection() ⇒ <code>Object</code>
User connect

**Kind**: global function  
**Returns**: <code>Object</code> - message for user  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| client | <code>Object</code> | ws client |
| args | <code>Array.&lt;Object&gt;</code> | data from user |
| wss | <code>Object</code> | websocket server |

<a name="handleDisconnect"></a>

## handleDisconnect()
User disconnect

**Kind**: global function  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| client | <code>Object</code> | ws client |
| wss | <code>Object</code> | websocket server |

<a name="handleErrorDevice"></a>

## handleErrorDevice() ⇒ <code>Object</code>
Error in on of the user device

**Kind**: global function  
**Returns**: <code>Object</code> - message for user  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| client | <code>Object</code> | ws client |
| message | <code>Object</code> | data from user |
| wss | <code>Object</code> | websocket server |

<a name="handleUpdateLocation"></a>

## handleUpdateLocation() ⇒ <code>Object</code>
Update user location for all users in the range

**Kind**: global function  
**Returns**: <code>Object</code> - message for user  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| client | <code>Object</code> | ws client |
| message | <code>Object</code> | data from user |
| wss | <code>Object</code> | websocket server |

<a name="handleRouteUser"></a>

## handleRouteUser() ⇒ <code>Object</code>
Update user route for two users

**Kind**: global function  
**Returns**: <code>Object</code> - message for user  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| client | <code>Object</code> | ws client |
| message | <code>Object</code> | data from user |
| wss | <code>Object</code> | websocket server |

<a name="event_fixError"></a>

## "fixError" ⇒ <code>string</code>
Save user location in database

**Kind**: event emitted  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="event_fixUserLocation"></a>

## "fixUserLocation" ⇒ <code>string</code>
Save user location in database

**Kind**: event emitted  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="event_routeToPlace"></a>

## "routeToPlace" ⇒ <code>string</code>
Create route for static place

**Kind**: event emitted  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="event_changeUserAlgorithm"></a>

## "changeUserAlgorithm" ⇒ <code>string</code>
Change user diskret algorithm for finding rout on map

**Kind**: event emitted  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="event_sendCode"></a>

## "sendCode" ⇒ <code>string</code>
Send code for user phone

**Kind**: event emitted  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="event_confirmCode"></a>

## "confirmCode" ⇒ <code>string</code>
Confirm phone code

**Kind**: event emitted  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="event_loginByToken"></a>

## "loginByToken" ⇒ <code>string</code>
Login user by token (beta)

**Kind**: event emitted  
**Returns**: <code>string</code> - ok status  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |

<a name="event_afterInit"></a>

## "afterInit"
Init websocket server

**Kind**: event emitted  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| server | <code>Object</code> | websocket server |

<a name="event_handleConnection"></a>

## "handleConnection" ⇒ <code>Object</code>
User connect

**Kind**: event emitted  
**Returns**: <code>Object</code> - message for user  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| client | <code>Object</code> | ws client |
| args | <code>Array.&lt;Object&gt;</code> | data from user |

<a name="event_handleDisconnect"></a>

## "handleDisconnect"
User disconnect

**Kind**: event emitted  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| client | <code>Object</code> | ws client |

<a name="event_handleErrorDevice"></a>

## "handleErrorDevice" ⇒ <code>Object</code>
Error in on of the user device

**Kind**: event emitted  
**Returns**: <code>Object</code> - message for user  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| client | <code>Object</code> | ws client |
| message | <code>Object</code> | data from user |

<a name="event_handleUpdateLocation"></a>

## "handleUpdateLocation" ⇒ <code>Object</code>
Update user location for all users in the range

**Kind**: event emitted  
**Returns**: <code>Object</code> - message for user  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| client | <code>Object</code> | ws client |
| message | <code>Object</code> | data from user |

