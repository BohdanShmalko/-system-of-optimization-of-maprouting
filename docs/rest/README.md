# REST

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/9741c970139d8b0f7c67?action=collection%2Fimport)

## Connection http module (Angular/Nest)

In your.module.ts
```
import { Module, HttpModule } from '@nestjs/common';
import { YourService } from './your.service';
@Module({
    imports: [HttpModule],
    providers: [YourService],
    exports: [YourService],
})
export class YourModule {}
```

In your.service.ts
```
import { Injectable, HttpService } from '@nestjs/common';
@Injectable()
export class YourService {
    constructor(private http: HttpService) {}
    // your code here
}
```

## Connection axios (nodejs)

1. Install axios with `npm install axios` or `yarn add axios`
2. Add axios in your code
```
const axios = require('axios');
```

## Examples (with http module)

#### Fix user location

```
const { data } = await this.http.post('/location', {
    lat: 'your lat',
    lon: 'your lon',
}, { Authorization: `Bearer ${yourToken}` }).toPromise();
```

#### Fix device error

```
const { data } = await this.http.post('/error', {
    error: 'error message'
}, { Authorization: `Bearer ${yourToken}` }).toPromise();
```

#### Login by token

```
const { data } = await this.http.post('/user/login', {
    token: 'your token'
}).toPromise();
```

#### Send secure code

```
const { data } = await this.http.post('/user/sendCode', {
    phone: 'your phone number'
}).toPromise();
```

#### Confirm secure code

```
const { data } = await this.http.post('/user/confirmCode', {
    phone: 'your phone number',
    code: 'secure code',
}).toPromise();
```

#### Change account algorithm

```
const { data } = await this.http.put('/route', {
    algorithm: 'choosen algorithm'
}, { Authorization: `Bearer ${yourToken}` }).toPromise();
```

#### Get route to static place

```
const { data } = await this.http.get('/route/place?lat=placeLat;lon=placeLon',
    { Authorization: `Bearer ${yourToken}` }).toPromise();
```