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
    userId: 'user id',
}, { api_key: yourApiKey }).toPromise();
```

#### Fix device error

```
const { data } = await this.http.post('/error', {
    error: 'error message',
    userId: 'user id',
}, { api_key: yourApiKey }).toPromise();
```

#### Change account algorithm

```
const { data } = await this.http.put('/user/algorithm/:userId', {
    algorithm: 'choosen algorithm'
}, { api_key: yourApiKey }).toPromise();
```

#### Get route to static place

```
const { data } = await this.http.get('/location/place?lat=placeLat;lon=placeLon',
    { api_key: yourApiKey }).toPromise();
```