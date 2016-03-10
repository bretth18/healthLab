
Template.chat.helpers({
  create: function(){

  },
  rendered: function(){
    Meteor.call('getToken', function(err, response){
      if (err){
        return;
      }
      messagingClient = new Twilio.IPMessaging.Client(response);

      messagingClient.getChannelByUniqueName("healthlab").then(function(channel) {
        if (!channel) {
          messagingClient.createChannel({
            uniqueName: 'healthlab',
            friendlyName: 'healthLab.io'
          }).then(function(channel){
            configureChannel(channel);
          });
        } else {
          configureChannel(channel);
        }
      });
    });
    function configureChannel(channel){
      currentChannel = channel;
      channel.join();
      Session.set('messages', []);
      channel.on('messageAdded', function(message){
        var messages = Session.get('messages');
        messages.push({ body: message.body, author: message.author });
        Session.set('messages', messages);
      });
    }

  },
  messages: function(){
    return Session.get('messages');
  },
  destroyed: function(){

  },
});

Template.chat.events({
  "submit .new-message": function (event) {
     event.preventDefault();
     var text = event.target.message.value;
     currentChannel.sendMessage(text);

     event.target.message.value = "";
   }
});
