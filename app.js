var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var ss = require('socket.io-stream');
var path = require('path');

server.listen(8888);
console.log('Server run...');

app.use(express.static(path.join(__dirname, 'js')));
// Never do this on your project! Thus access to the files are not safe.
// This is just an example :)
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/' + req.params[0]);
});

io.on('connection', function (socket) {
    ss(socket).on('send-file', function(stream,fileName) {
        stream.pipe(fs.createWriteStream(fileName));
    });
});