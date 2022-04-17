# Webhooks

### Intro
Webhooks are a technology that allows you to catch client changes on the client's side instantly. The client can create a server that will accept web hooks (requests) from the system. The client will be the server, and the system will be the client with this technology.

### Webhooks kinds

* Client Updated
* User Created
* User Updated
* User Deleted
* Webhook Created
* Webhook Updated
* Webhook Deleted
* UserHistory Created
* UserHistory Deleted
* Error Created
* Error Deleted
* UserRooms Created
* UserRooms Deleted

### Examples

#### Fix webhook in system

```
const { data } = await this.http.post('/webhooks', {
  "url": "http://localhost:3001/getWebhook",
  "event": "User Created",
  "name": "user_created"
}, { api_key: yourApiKey }).toPromise();
```

#### Get information from system (test nodejs http server)

```
const http = require('http');
const { parse } = require('querystring');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((req, res) => {
  if(req.method.toUpperCase() === 'POST' && req.url === '/getWebhook'){
      let body = '';
      req.on('data', function (data) {
        body += data;
      });
      req.on('end', function () {
        try {
          req.body = JSON.parse(body);
          console.log(req.body);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('ok');
        } catch (e) {
          req.body = parse(body);
        }
      });
  }else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```