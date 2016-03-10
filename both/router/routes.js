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

//router for chat
Router.route('/chat', {
  waitOn: function () {
    return IRLibLoader.load('//media.twiliocdn.com/sdk/rtc/js/ip-messaging/v0.8/twilio-ip-messaging.min.js');
  },
  name: 'chat'
});
