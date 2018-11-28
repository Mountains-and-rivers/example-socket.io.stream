const path = require('path');

module.exports = {
  mode: 'none',
  entry: "./js/socket.js",
  output: {
    filename: "socket.io.js",
    path: path.resolve(__dirname, "dist")
  }
}