const WebSocket = require("ws");

// Set up WebSocket server
const server = new WebSocket.Server({
  port: process.env.REACT_APP_PORT_WEBSOCKET,
});

module.exports = {
  serverWebsocket: server,
};
