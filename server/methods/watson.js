//backend for watson Q/A handler
Meteor.startup(function(){
  Meteor.methods({
    watsonHandler:function(){
      var watson = Meteor.npmRequire('watson-developer-cloud');

      /* Appending data from Twilio input into watson,
      returning watson's output into twilio for Q/A session */

      var watsonInput;
      //start dialog session
      var dialog = watson.dialog(watsonCredentials);
    }
  });
});
