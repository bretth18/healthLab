//handles grabbing our data from drug interactionsAPI
Meteor.startup(function() {
    Meteor.methods({
        getDrugJSON: function() {
            //two values are added to our GET request
            function testJson() {
                var baseUrl = 'https://rxnav.nlm.nih.gov/REST/';
                var testUrl = 'https://rxnav.nlm.nih.gov/REST/rxcui?name=xanax'
                var inteUrl = 'https://rxnav.nlm.nih.gov/REST/interaction?rxcui='
                var request = Meteor.npmRequire('request');
                //GET request to RESTapi
                function getCui() {
                    request(testUrl, function(error, response, body) {
                        if (!error && response.statusCode == 200) {
                            var info = JSON.parse(body);
                            console.log(info);
                        } else {
                            console.log(err);
                        }
                    });
                }
                //get the rcxui for the drug
                var rcxui1 = info.idGroup[rxnormid];
                var rcxui2 = info.idGroup[rxnormid];

                function getInteraction() {
                    //build our GET request
                    let finalUrl = `inteUrl{rxui1}&{rxui2}`; //ES6
                    request(finalUrl, function(error, response, body) {
                        if (!error && response.statusCode == 200) {
                            var interJson = JSON.parse(body);
                            console.log(interJson);
                        } else {
                            console.log(err);
                        }
                    });
                }

            }



        }
    });
});
