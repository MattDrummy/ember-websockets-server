const WebSocketServer = require('ws').Server;
const ws = new WebSocketServer({port:7000});

ws.on('connection', function connection(ws){
  ws.on('message', function incoming(message){
    console.log('received %s', message);
  });

  ws. send('Welcome to websockets!')
})
