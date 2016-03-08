Template.dashboard.rendered = function() {

};



Template.dashboard.events({
  'click #deleteItem': function(event, template) {
    Items.remove(this._id);
    toast('Item Removed!', 4000);
  },
  'click #fitbitLogin': function(event, template) {

    Fitbit = {};
    //This handles gathering our Oauth key for server side validation
    Fitbit.requestCredential = function(options, credentialRequestCompleteCallback) {
      // support both (options, callback) and (callback).
      if (!credentialRequestCompleteCallback && typeof options === 'function') {
        credentialRequestCompleteCallback = options;
        options = {};
      }
      var config = ServiceConfiguration.configurations.findOne({
        service: 'fitbit'
      });
      if (!config) {
        credentialRequestCompleteCallback && credentialRequestCompleteCallback(
          new ServiceConfiguration.ConfigError());
        return;
      }
      var credentialToken = Random.secret();
      // We need to keep credentialToken across the next two 'steps' so we're adding
      // a credentialToken parameter to the url and the callback url that we'll be returned
      // to by oauth provider
      var loginStyle = OAuth._loginStyle('fitbit', config, options);
      // url to app, enters "step 1" as described in
      // packages/accounts-oauth1-helper/oauth1_server.js
      var loginPath = '_oauth/fitbit/?requestTokenAndRedirect=true' + '&state=' + OAuth._stateParam(loginStyle, credentialToken);

      if (Meteor.isCordova) {
        loginPath = loginPath + "&cordova=true";
        if (/Android/i.test(navigator.userAgent)) {
          loginPath = loginPath + "&android=true";
        }
      }
      var loginUrl = Meteor.absoluteUrl(loginPath);
      OAuth.launchLogin({
        loginService: "fitbit",
        loginStyle: loginStyle,
        loginUrl: loginUrl,
        credentialRequestCompleteCallback: credentialRequestCompleteCallback,
        credentialToken: credentialToken
      });
    };
  }
});
