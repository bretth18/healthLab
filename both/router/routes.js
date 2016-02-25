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
