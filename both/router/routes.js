FlowRouter.route('/', {
  action: function() {
  BlazeLayout.render( 'appLayout', { main: 'home' } );
},

});

// FlowRouter.route('/dashboard', {
//   name: 'dashboard',
//   controller: 'DashboardController'
// });
//
// FlowRouter.route('/items/new', {
//   name: 'items.new',
//   controller: 'ItemsNewController'
// });
//
// //router for profile template
// FlowRouter.route('/profile', {
//   name: 'profile'
// });
//
// FlowRouter.plugin('ensureSignedIn', {
//   only: ['dashboard']
// });
//
//
// //router for drugCompare
// FlowRouter.route('/compare', {
//   name: 'compare'
// });
//
// //router for privacy policy
// FlowRouter.route('/privacy', {
//   name: 'privacyPolicy'
// });
//
// //router for chat
// FlowRouter.route('/chat', {
//   waitOn: function () {
//     return IRLibLoader.load('//media.twiliocdn.com/sdk/rtc/js/ip-messaging/v0.8/twilio-ip-messaging.min.js');
//     if (err){
//       return Meteor.console.error('twilio connection failed');
//     }
//   },
//   name: 'chat'
// });
