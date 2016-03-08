//oath config file

var token = Meteor.users.findOne({_id:"recordId"});

//runkeeper
const Runkeeper = FitAPI.runkeeper;
const Fitbit = FitAPI.fitbit;


//server-side handler for runkeeper api
var options = {
  config: {
    access_token: "be713108c9384f79ad6e8efe26e6c23c"
  }
};

Runkeeper.init(options);

//server-side handler for fitbit oAuth

urls = {
  requestToken: "https://api.fitbit.com/oauth/request_token",
  authorize: "https://www.fitbit.com/oauth/authorize",
  accessToken: "https://api.fitbit.com/oauth/access_token",
  authenticate: "https://www.fitbit.com/oauth/authenticate"
};

// Fitbit.whitelistedFields = ['fullName', 'avatar', 'gender', 'country', 'nickname', 'dateOfBirth'];

// Oauth.registerService('fitbit', 1, urls, function(oauthBinding) {
//
//   var identity = oauthBinding.get('https://api.fitbit.com/1/user/-/profile.json').data;
//
//   var serviceData = {
//     id: identity.user.encodedId,
//     name: identity.user.displayName,
//     accessToken: OAuth.sealSecret(oauthBinding.accessToken),
//     accessTokenSecret: OAuth.sealSecret(oauthBinding.accessTokenSecret)
//   };
//
//   var fields = _.pick(identity, Fitbit.whitelistedFields);
//   _.extend(serviceData, fields);
//
//   return {
//     serviceData: serviceData,
//     options: {
//       profile: {fullNaame: identity.user.fullNaame, displayName: identity.user.displayName}
//     }
//   };
// });
// Fitbit.retrieveCredential = function(credentialToken, credentialSecret) {
//   return OAuth.retrieveCredential(credentialToken, credentialSecret);
// };
