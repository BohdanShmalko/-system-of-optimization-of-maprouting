# System for building the optimal route on the map

Designed to obtain the optimal route on the map. The system provides REST API and Websocket for easy interaction with customers. Based on the algorithms of "Discrete Mathematics and Graph Theory", the system compares existing routes and based on them creates a more optimal

### Content 
- [Designation and name](#name)
- [Software required for operation](#software)
- [Appointment](#appointment)
- [Description of the structure](#structure)
- [Used technical means](#technical)
- [Call and download](#download)

<a name="name"></a>

## Designation and name

Name of system - Maprouting optimization

Full name of system - Based on the algorithms of "Discrete Mathematics and Graph Theory", the system for building the optimal route on the map

<a name="software"></a>

## Software required for operation

The following software and packages are required for the operation of a software module written in the TypeScript programming language:

* `@nestjs/common` 8.0.0
* `@nestjs/config` 1.1.6
* `@nestjs/core` 8.0.0
* `@nestjs/jwt` 8.0.0
* `@nestjs/mongoose` 9.0.2
* `@nestjs/platform-express` 8.0.0
* `@nestjs/platform-socket.io` 8.2.6
* `@nestjs/serve-static` 2.2.2
* `@nestjs/swagger` 5.2.0
* `@nestjs/websockets` 8.2.6
* `class-transformer` 0.5.1
* `class-validator` 0.13.2
* `cross-env` 7.0.3
* `mongoose` 6.2.0
* `reflect-metadata` 0.1.13
* `rimraf` 3.0.2
* `rxjs` 7.2.0
* `socket.io` 4.4.1
* `swagger-ui-express` 4.3.0
* `vuepress` 1.9.7
* `webpack` 4.42.0"

dev

* `@babel/cli` 7.17.0
* `@babel/core` 7.17.0
* `@babel/preset-env` 7.16.11
* `@babel/preset-typescript` 7.16.7
* `@nestjs/cli` 8.0.0
* `@nestjs/schematics` 8.0.0
* `@nestjs/testing` 8.0.0
* `@types/express` 4.17.13
* `@types/jest` 26.0.24
* `@types/node` 16.0.0
* `@types/supertest` 2.0.11
* `@typescript-eslint/eslint-plugin` 4.28.2
* `@typescript-eslint/parser` 4.28.2
* `eslint` 7.30.0
* `eslint-config-prettier` 8.3.0
* `eslint-plugin-prettier` 3.4.0
* `jest` 27.0.6
* `jsdoc-babel` 0.5.0
* `jsdoc-to-markdown` 7.1.1
* `prettier` 2.3.2
* `supertest` 6.1.3
* `ts-jest` 27.0.3
* `ts-loader` 9.2.3
* `ts-node` 10.0.0
* `tsconfig-paths` 3.10.1
* `typescript` 4.5.5

<a name="appointment"></a>

## Appointment

The system is designed to provide rest and web sockets api, to create client applications based on it. As well as to provide data for devices that interact with this system (eg Arduino)

<a name="structure"></a>

## Description of the structure

The system consists of some modules

* SwagerModule - a module for automatic creation of system documentation
* ServeStaticModule - a module for displaying statics in the system
* MongooseModule - a module for interacting with the database
* WsModule is a module for providing logic of web sockets
* UserModule is a module that is responsible for the API of registration, login and user changes
* RouteModule - a module responsible for building routes
* LocationModule - a module for saving the location of users
* ErrorModule - a module that is responsible for device errors

<a name="technical"></a>

## Used technical means

The software module is operated on a server running Node.js. At the heart of the management of all services is the Kubernetes orchestration system, where all containers work using Docker

<a name="download"></a>

## Call and download

You can download code from [Github repository](https://github.com/BohdanShmalko/-system-of-optimization-of-maprouting/tree/master) or use rest and websocket api