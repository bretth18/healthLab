//handles grabbing our data from drug interactionsAPI
Meteor.startup(function(){
  Meteor.methods({
    getDrugJSON:function(){
      //two values are added to our GET request
      function testJson() {
      var baseUrl = 'https://rxnav.nlm.nih.gov/REST/';
      var testUrl = 'https://rxnav.nlm.nih.gov/REST/rxcui?name=xanax'
      var request = Meteor.npmRequire('request');
      //GET request to RESTapi
      request(testUrl, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            var info = JSON.parse(body)
            console.log(info);
          }
      });
      //get the rcxui for the drug
      var rcxui1 = info.idGroup[rxnormid];
    }



    }
  });
});
