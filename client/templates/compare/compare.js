
Template.compare.helpers({
  create: function(){

  },
  rendered: function(){
    //TODO: on pageRendered, begin API call for drug interactionsAPI
    function testJson() {
    var baseUrl = 'https://rxnav.nlm.nih.gov/REST/';
    var testUrl = 'https://rxnav.nlm.nih.gov/REST/rxcui?name=xanax'
    var request = Meteor.npmRequire('request');
    request(testUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var info = JSON.parse(body)
          console.log(body);
        }
    });
  }

  },
  destroyed: function(){

  }
});

Template.name.events({
  "click #foo": function(event, template){

  }
});
