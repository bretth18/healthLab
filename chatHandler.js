var topics = {};

var JOIN_CHANNEL = 'JOIN_CHANNEL';
var LEAVE_CHANNEL = 'LEAVE_CHANNEL';
var MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';
var RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
var CREATE_CHANNEL = 'CREATE_CHANNEL';

topics["public"] = Topic();

module.exports = function connectionHandler (ws) {
  var subscriptions = [];

  var receiveMessage = function (message) {
    ws.send(JSON.stringify(Object.assign({},{
      type: RECEIVE_MESSAGE
    },message)), err => {
      if (err) {
        console.error(err);  
      }
    });
  };

  ws.on('message', function (msg) {
    console.log(command);
    var command = JSON.parse(msg);

    switch(command.type) {
    case JOIN_CHANNEL:
      var topic = topics[command.channel];
      if (!topic) return;
      topic.subscribe(receiveMessage)
      return;

    case MESSAGE_CHANNEL:
      var topic = topics[command.channel];
      if (!topic) return;
      topic.broadcast({
        message: command.message,
        channel: command.channel
      });
      return;

    case CREATE_CHANNEL: 
      topics[command.channel] = topics[command.channel] || Topic();
      topics[command.channel].subscribe(receiveMessage);
      return;

    default:
    }

  });

  ws.on('close', function () {
    console.log("close");
    subscriptions.forEach(sub => sub.unsubscribe());
  });
}

function messageHandler (msg) {

  var message = JSON.parse(msg);
}

function Topic () {
  var subscribers = [];
  var messages = [];

  function subscribe (f) {
    subscribers.push(f);
    messages.forEach(x => f(x));
   
    return function unsubscribe () {
      var i = subscribers.indexOf(f);
      if (i < 0) return;

      subscribers = subscribers.slice(0, i).concat(subscribers.slice(i + 1));
    }
  }

  function broadcast (msg) {
    messages.push(msg);
    subscribers.forEach(f => {
      f(msg);
    });
  }

  return {
    subscribe, 
    broadcast
  };
}
