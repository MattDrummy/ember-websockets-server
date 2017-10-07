const WebSocketServer = require('ws').Server;
const WebSocket = require('ws')
const rooom1 = new WebSocketServer({
  port: 'https://thawing-stream-29526.herokuapp.com/',
  path: 'room1',
  verifyClient: function(info){
    return true
  }
});
const room2 = new WebSocketServer({
  server: 'https://thawing-stream-29526.herokuapp.com/',
  path: 'room2',
  verifyClient: function(info){
    return true;
  }
});

rooom1.broadcast = function broadcast(data){
  rooom1.clients.forEach(function each(client){
    if (client.readyState === WebSocket.OPEN) {
      client.send(data)
    }
  })
}
rooom1.on('connection', function connection(ws, req){
  ws.on('message', function incoming(data){
    console.log('received %s', data);
    rooom1.clients.forEach(function each(client){
      if (client !== ws && client.readyState == WebSocket.OPEN) {
        client.send(data)
      }
    })
    ws.send(data)
  });

  ws.send('Welcome to websockets!')
})


room2.broadcast = function broadcast(data){
  room2.clients.forEach(function each(client){
    if (client.readyState === WebSocket.OPEN) {
      client.send(data)
    }
  })
}
room2.on('connection', function connection(ws){
  ws.on('message', function incoming(data){
    console.log('received %s', data);
    room2.clients.forEach(function each(client){
      if (client !== ws && client.readyState == WebSocket.OPEN) {
        client.send(data)
      }
    })
    ws.send(data)
  });

  ws.send('Welcome to websockets!')
})
