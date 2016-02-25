
Template.profile.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.profile.events({
  "click #edit": function(event, template){
    Router.go('/editProfile');
  }
});
