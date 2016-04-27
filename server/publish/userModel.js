import { Meteor } from 'meteor/meteor';

// publishing users collection to client
Meteor.publish("users", function(err){
  if (err){
    console.log("error, failed to publish on server", err);
  } else {
    return Meteor.users.find();
  }
});
