# REST

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/3adc7d4e2c91f3bd1586?action=collection%2Fimport)

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
    time: 11111111,
    userId: 'user id',
}, { api_key: yourApiKey }).toPromise();
```

#### Get route to static place

```
const { data } = await this.http.get('/location/route?startLat=38.8951&startLon=-77.0364&endLat=31.8951&endLon=-71.0364&userId=625ac414cc55e1f020c50436&transport=car',
    { api_key: yourApiKey }).toPromise();
```