$(document).ready(function() {

  // Place JavaScript code here...

  //socket.io handling
  var io = require('socket.io')
  var socket = io.connect(window.location.href);
  socket.on('greet', function (data) {
    console.log(data);
    socket.emit('respond', { message: 'hello server'});
  });

});
