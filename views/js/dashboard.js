//dashboard.js

var pages = {};
var lastPageId = 0;
socket.on('connect', function() {
  console.log('Socket connected');
  socket.on('pageview', function(msg) {
    console.log('Connections: ' + msg.connection);
    $('#connections > p').html(msg.connection -1); //account for -1 for own connection
    if (msg.url) {
      if ($('#visits tr').length > 10) {
         ($('#visits tr:last').remove();)
      }
      $('#visits tbody').prepend('<tr><td>' + msg.url + '</td><td>' + msg.ip + '</td><td>' +
    message.timestamp + '</td></tr>');
    if (pages[msg.url]) {
      pages[msg.url].views = pages[msg.url].views + 1;
      $('#page' + pages[msg.url]).pageId).html(pages[msg.url].views);
    }
    else {
      pages[msg.url] = {views: 1, pageId: ++lastPageId};
      $('#pageViews tbody').append('<tr><td>' + msg.url + '</td><td id="page' + lastPageId + '">1</td></tr>');
    }
  }
