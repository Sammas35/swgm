const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const mwmessage = require('./mwmessage');
const http = require('http').Server(server);
const io = require('socket.io')(http);

server.use(middlewares);
server.use(mwmessage(io));
server.use(router);
http.listen(3000, () => {
    console.log('JSON Server is running');
});
module.exports = server;

