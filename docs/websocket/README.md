# Websockets

## Connection socket.io client (library)
1. Install library `yarn add socket.io-client` or `npm i socket.io-client`
2. Use in code
```
import io from 'socket.io-client'
const socketRef = io(SERVER_URL, { query: { roomId } });
socketRef.emit('user:add', { username, userId });
socketRef.on('users', (data) => {
    console.log(data)
});
```

## Connection socket.io client (in browser)

in .html
```
<script src="https://cdn.socket.io/4.4.1/socket.io.min.js" integrity="sha384-fKnu0iswBIqkjxrhQCTZ7qlLHOFEgNkRmK2vaO/LbTZSXdJfAu6ewRBdwHPhBo/H" crossorigin="anonymous"></script>
```

in .js
```
const socket = new WebSocket("ws://localhost:3000");

socket.onopen = () => {
  socket.send("Hello!");
};

socket.onmessage = (data) => {
  console.log(data);
};
```

## Connection socket.io client module (Angular)
1. Install `npm install ngx-socket-io` or `yarn add ngx-socket-io`
2. Use in code 
```
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };
// in module
@NgModule({
  // ...
  imports: [
    // ...
    SocketIoModule.forRoot(config)
  ],
  // ...
})

//in service
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class YourService {
  constructor(private socket: Socket) { }

  getDocument(id: string) {
    this.socket.emit('getDoc', id);
  }

  newDocument() {
    this.socket.on('addDoc', (data) => {
        console.log(data);
    });
  }
}
```
## Examples (client)

### emit

#### device error
```
socket.emit('serverErrorDevice', { message: 'your error message', userId: 'uniqueId' });
```

#### update location if in room
```
socket.emit('serverUpdateLocation', { 
    lat: 'your lat',
    lon: 'your lon',
    userId: 'uniqueId',
 });
```

### on

#### connect
```
socket.on('connect', (data) => {
    console.log(data);
})
```

#### user error in your room
```
socket.on('clientErrorDevice', (data) => {
    console.log(data);
})
```

#### user update location in your room
```
socket.on('clientUpdateLocation', (data) => {
    console.log(data);
})
```