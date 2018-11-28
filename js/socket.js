
import io from "socket.io-client"
import ss from "socket.io-stream"

$(document).ready(function (){

  var socket = io.connect(location.href);

  $('#file').change(function(e) {
    console.log("0832804r0w7e9r79w0ery9")
    var file = e.target.files[0];
    var stream = ss.createStream();
    // upload a file to the server.

    ss(socket).emit('send-file', stream,file.name);
    ss.createBlobReadStream(file).pipe(stream);
    $('#file').val('');
    $('#file').after('<p>File uploaded!</p>');
  });
});





