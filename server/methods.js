import {
    Meteor
} from 'meteor/meteor';

if (Meteor.isServer) {
    console.log(Meteor.users);
    Meteor.methods({
        emailVerification: function(userInfo) {

                console.log(userInfo);
                console.log('server side method reached');
                Accounts.sendVerificationEmail(userId, userInfo.email);
            },
        // Method that calls PillFill API for drug product information
        // takes a param of a drug product name i.e Xanax
        getDrugProduct: function(drug) {

            var http = require("https");
            // global
            var reqData;
            // request params
            var options = {
                "method": "GET",
                "hostname": "developer.pillfill.com",
                "port": "443",
                "path": '/service/v1/products?term=' + drug + '&type=name&page=0',
                "headers": {
                    "user_key": "7240d001d3e80f4f17d3911f3a55db27",
                    "cache-control": "no-cache",
                    "postman-token": "6aedd394-7f02-5911-0e3f-719303153045"
                }
            };
            // begin request
            var req = http.request(options, function(res) {
                var chunks = [];

                res.on("data", function(chunk) {
                    chunks.push(chunk);
                });
                // JSON body being logged as string
                res.on("end", function() {
                    var body = Buffer.concat(chunks);
                    console.log(body.toString());
                    reqData = body.toString();
                });
            });

            req.end();
            // FYI, this is a shit-ton of data
            return reqData;
        },

    });
}
