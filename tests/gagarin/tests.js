describe('testing gagarin', function () {
    var server = meteor();
    it('should just work', function () {
        return server.execute(function () {
            console.log('sup bro');
        });
    });
});

describe('testing json', function () {
    var server = meteor();
    var baseUrl = 'https://rxnav.nlm.nih.gov/REST/';
    var testUrl = 'https://rxnav.nlm.nih.gov/REST/rxcui?name=xanax';
    // it('should return json data', function () {
    //     function getApi() {
    //         var request = require('request');
    //         request(testUrl, function (error, response, body) {
    //             if (!error && response.statusCode == 200) {
    //                 var info = JSON.parse(body)
    //                 console.log(body);
    //             }
    //         });
    //     }
    //     return server.execute(getApi());
    // });
    it('default test returns valid', function () {
        return server.execute(function () {
            console.log('shotty programming gets hoes');
        });
    });
});
