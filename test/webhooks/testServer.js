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