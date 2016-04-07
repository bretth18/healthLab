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

      app.get('/api/question', function(req, res){
    // Call the service with a question and get an array with the answers
    var answers = watson.question(req.query);
    // Send the answers and the question to the client in json
    res.json({answers: answers, question: req.query.question});
});
    }
  });
});
