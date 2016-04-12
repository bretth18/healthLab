Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/items/new', {
  name: 'items.new',
  controller: 'ItemsNewController'
});

//router for profile template
Router.route('/profile', {
  name: 'profile'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});


//router for drugCompare
Router.route('/compare', {
  name: 'compare'
});

//router for privacy policy
Router.route('/privacy', {
  name: 'privacyPolicy'
});

//router for chat
Router.route('/chat', {
  waitOn: function () {
    return IRLibLoader.load('//media.twiliocdn.com/sdk/rtc/js/ip-messaging/v0.8/twilio-ip-messaging.min.js');
    if (err){
      return Meteor.console.error('twilio connection failed');
    }
  },
  name: 'chat'
});
