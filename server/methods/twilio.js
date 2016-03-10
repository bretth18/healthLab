//startup function to grab our twilio auth
Meteor.startup(function(){
  Meteor.methods({
    getToken: function(name){
      var accessToken = Meteor.npmRequire('twilio').AccessToken;
      var ipMessagingGrant = accessToken.IpMessagingGrant;
      var appName = 'healthlab';
      var identity = '';
      var deviceId = 'browser';
      //create unique ID
      var endpointId = appName + ':' + identity + ':' + deviceId;
      //grant IPM service
      var ipmGrant = new ipMessagingGrant({
        serviceSid: '{{ SERVICE_SID }}',
        endpointId: endpointId
      });
      //create token
      var token = new AccessToken(
        '{{ TWILIO_ACCOUNT_SID }}',
        '{{ TWILIO_API_KEY }}',
        '{{ TWILIO_API_SECRET }}'
      );
      token.addGrant(ipmGrant);
      token.identity = identity;

      return token.toJwt();

    }
  });
});
