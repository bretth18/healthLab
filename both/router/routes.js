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


// import {
//     renderBasic,
//     renderSlim
// } from './helper.js';
//
// export default function() {
//
//     //routing for home
//     FlowRouter.route('/', {
//       action: () => renderBasic('home')
//     });
//
//     //routing for Dashboard
//     FlowRouter.route('/dashboard', {
//       action: () => renderBasic('dashboard')
//     });
//
//     FlowRouter.route('items/new', {
//       action: () => renderBasic('items.new')
//     });
//
//     //profiles
//     FlowRouter.route('/profile', {
//       action: () => renderBasic('profile')
//     });
//
//     FlowRouter.route('/compare', {
//       action: () => renderBasic('compare')
//     });
//
//     FlowRouter.route('/privacy', {
//       action: () => renderBasic('privacyPolicy')
//     });
//
// }

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
